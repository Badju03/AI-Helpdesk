const knowledge = require("./knowledge");
const sessions = require("./sessions");

// Standard response object
function createResponse(reply, buttons = []) {
    return {
        reply,
        buttons
    };
}

function startConversation(question) {

    const lower = question.toLowerCase();

    for (const category in knowledge) {

        const item = knowledge[category];

        const found = item.keywords.some(keyword =>
            lower.includes(keyword)
        );

        if (found) {

            sessions.current = {
                category,
                step: 1
            };

            // Return the first question with buttons
            return createResponse(
                item.steps[0].question,
                item.steps[0].buttons || []
            );

        }

    }

    return createResponse(
        "Sorry, I don't recognize that issue yet. Try Outlook or Email."
    );

}

module.exports = {
    startConversation
};
