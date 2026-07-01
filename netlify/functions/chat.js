const engine = require("./engine");

exports.handler = async (event) => {

    try {

        const { question } = JSON.parse(event.body);

        const response = engine.startConversation(question);

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
