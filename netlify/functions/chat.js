const engine = require("./engine");

exports.handler = async (event) => {
    
};

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

            return item.steps[0].question;

        }

    }

    return "Sorry, I don't recognize that issue yet. Try Outlook or Email.";

}

module.exports = {

    startConversation

};
