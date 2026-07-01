const engine = require("./engine");

exports.handler = async (event) => {

    try {

        const { question } = JSON.parse(event.body);

        const answer = engine.startConversation(question);

        return {
            statusCode: 200,
            body: JSON.stringify({
                answer
            })
        };

    } catch (err) {

        return {
            statusCode: 500,
            body: JSON.stringify({
                answer: err.message
            })
        };

    }

};
