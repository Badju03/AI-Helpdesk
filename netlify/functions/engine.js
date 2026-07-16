const knowledge = require("./knowledge");
const sessions = require("./sessions");

// Creates a standard response object
function createResponse(step) {

    if (step.diagnosis) {
        return {
            reply: step.diagnosis,
            buttons: []
        };
    }

    return {
        reply: step.question,
        buttons: step.buttons || []
    };

}

// Starts a new conversation
function startConversation(question) {

    const lower = question.toLowerCase();

    for (const category in knowledge) {

        const item = knowledge[category];

        // Skip invalid modules
        if (!item || !Array.isArray(item.keywords)) {
            continue;
        }

        const found = item.keywords.some(keyword =>
            lower.includes(keyword.toLowerCase())
        );

        if (found) {

            sessions.current = {
                category: category,
                step: 1
            };

            const firstStep = item.steps.find(step => step.id === 1);

            if (!firstStep) {
                return {
                    reply: "Knowledge base error: Missing first step.",
                    buttons: []
                };
            }

            return createResponse(firstStep);

        }

    }

    return {
        reply: "Sorry, I don't recognize that issue yet. Try Outlook, Windows, Printer or Internet.",
        buttons: []
    };

}

// Continue an existing conversation
function continueConversation(answer) {

    if (!sessions.current) {
        return startConversation(answer);
    }

    const category = knowledge[sessions.current.category];

    if (!category) {

        sessions.current = null;

        return {
            reply: "Session expired. Please start again.",
            buttons: []
        };

    }

    const currentStep = category.steps.find(
        step => step.id === sessions.current.step
    );

    if (!currentStep) {

        sessions.current = null;

        return {
            reply: "Conversation error. Please start again.",
            buttons: []
        };

    }

    const nextStepId = currentStep.answers?.[answer.toLowerCase()];

    if (!nextStepId) {

        return {
            reply: "Please choose one of the available options.",
            buttons: currentStep.buttons || []
        };

    }

    const nextStep = category.steps.find(
        step => step.id === nextStepId
    );

    if (!nextStep) {

        sessions.current = null;

        return {
            reply: "Troubleshooting step not found.",
            buttons: []
        };

    }

    sessions.current.step = nextStepId;

    return createResponse(nextStep);

}

module.exports = {

    startConversation,
    continueConversation

};
