const knowledge = require("./knowledge");
const sessions = require("./sessions");

function startConversation(question) {

    console.log("Knowledge object:");
    console.log(knowledge);

    const lower = question.toLowerCase();

    for (const category in knowledge) {

        console.log("Category:", category);

        const item = knowledge[category];

        console.log("Item:", item);

        console.log("Keywords:", item.keywords);

        if (!Array.isArray(item.keywords)) {
            throw new Error(`Category '${category}' has no keywords array.`);
        }

        const found = item.keywords.some(keyword =>
            lower.includes(keyword.toLowerCase())
        );

        if (found) {

            sessions.current = {
                category,
                step: 1
            };

            const firstStep = item.steps.find(step => step.id === 1);

            return {
                reply: firstStep.question,
                buttons: firstStep.buttons || []
            };
        }
    }

    return {
        reply: "Sorry, I don't recognize that issue yet.",
        buttons: []
    };
}

module.exports = {
    startConversation
};
