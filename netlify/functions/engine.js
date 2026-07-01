const knowledge = require("./knowledge");
const sessions = require("./sessions");

function createResponse(step) {

    // If it's a diagnosis step
    if (step.diagnosis) {
        return {
            reply: step.diagnosis,
            buttons: []
        };
    }

    // Normal question step
    return {
        reply: step.question,
        buttons: step.buttons || []
    };
}

// Start new conversation
function startConversation(question) {

    const lower = question.toLowerCase();

    for (const category in knowledge) {

        const item = knowledge[category];

        const found = item.keywords.some(keyword =>
            lower.includes(keyword)
        );

        if (found) {

            sessions.current = {
                category: category,
                step: 1
            };

            const step = item.steps.find(s => s.id === 1);

            return createResponse(step);
        }
    }

    return {
        reply: "Sorry, I don't recognize that issue yet. Try Outlook or Email.",
        buttons: []
    };
}

// Continue existing conversation
function continueConversation(answer) {

    const session = sessions.current;

    if (!session) {
        return startConversation(answer);
    }

    const category = knowledge[session.category];

    const currentStep = category.steps.find(
        s => s.id === session.step
    );

    if (!currentStep) {
        return {
            reply: "Session error. Please start again.",
            buttons: []
        };
    }

    const nextStepId =
        currentStep.answers?.[answer.toLowerCase()];

    if (!nextStepId) {
        return {
            reply: "I didn't understand that option. Please choose a button.",
            buttons: currentStep.buttons || []
        };
    }

    const nextStep = category.steps.find(
        s => s.id === nextStepId
    );

    sessions.current.step = nextStepId;

    return createResponse(nextStep);
}

module.exports = {
    startConversation,
    continueConversation
};
