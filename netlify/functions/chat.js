exports.handler = async (event) => {
  try {
    const { question } = JSON.parse(event.body);

    return {
      statusCode: 200,
      body: JSON.stringify({
        answer: "You asked: " + question
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