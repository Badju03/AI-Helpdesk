const engine = require("./engine");

exports.handler = async (event) => {

    try {

        const { question } = JSON.parse(event.body);

        let response;

        const session = require("./sessions").current;

        if (!session) {
            response = engine.startConversation(question);
        } else {
            response = engine.continueConversation(question);
        }

        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };

    } catch (err) {

        return {
            statusCode: 500,
            body: JSON.stringify({
                reply: err.message,
                buttons: []
            })
        };

    }
};