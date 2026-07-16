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

// Check if the user's message starts a new topic
function isNewTopic(message) {

    const lower = message.toLowerCase();

    for (const category in knowledge) {

        const item = knowledge[category];

        if (!item || !Array.isArray(item.keywords)) {
            continue;
        }

        if (item.keywords.some(keyword => lower === keyword.toLowerCase())) {
    return category;
        }

    }

    return null;

}

// Start a conversation
function startConversation(category) {

    const item = knowledge[category];

    if (!item) {

        return {
            reply: "Knowledge base not found.",
            buttons: []
        };

    }

    sessions.current = {

        category: category,
        step: 1

    };

    const firstStep = item.steps.find(step => step.id === 1);

    if (!firstStep) {

        return {
            reply: "Conversation is missing step 1.",
            buttons: []
        };

    }

    return createResponse(firstStep);

}

// Continue existing conversation
function continueConversation(answer) {

    if (!sessions.current) {

        return {
            reply: "Please start by typing one of the following:\n\n• Outlook\n• Windows\n• Printer\n• Internet\n• Password",
    buttons: []
        };

    }

    const category = knowledge[sessions.current.category];

    if (!category) {

        sessions.current = null;

        return {
            reply: "Session expired.",
            buttons: []
        };

    }

    const currentStep = category.steps.find(
        step => step.id === sessions.current.step
    );

    if (!currentStep) {

        sessions.current = null;

        return {
            reply: "Conversation error.",
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

    sessions.current.step = nextStep.id;

// If this is the final diagnosis, end the conversation
if (nextStep.diagnosis) {

    const response = createResponse(nextStep);

    sessions.current = null;

    return response;

}

// Otherwise continue the conversation
return createResponse(nextStep);

}

// Main entry point
function handleMessage(message) {

    // If a conversation is already active,
    // treat the message as an answer.
    if (sessions.current) {
        return continueConversation(message);
    }

    // Otherwise check if the user is starting a new topic.
    const category = isNewTopic(message);

    if (category) {
        return startConversation(category);
    }

    return {
        reply: "Please start by typing one of the following:\n\n• Outlook\n• Windows\n• Printer\n• Internet\n• Password",
        buttons: []
    };

}

module.exports = {

    handleMessage,
    startConversation,
    continueConversation

};
