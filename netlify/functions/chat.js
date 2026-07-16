const engine = require("./engine");

exports.handler = async (event) => {

    try {

        if (!event.body) {
            throw new Error("Request body is empty.");
        }

        const { question } = JSON.parse(event.body);

        const response = engine.handleMessage(question);

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
