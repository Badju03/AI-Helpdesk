exports.handler = async (event) => {
  try {
    const { question } = JSON.parse(event.body);

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          messages: [
            {
              role: "system",
              content:
                "You are a professional Level 1 IT Helpdesk technician. Provide clear step-by-step troubleshooting."
            },
            {
              role: "user",
              content: question
            }
          ]
        })
      }
    );

    const data = await response.json();

    // Log the full response to Netlify logs
    console.log(JSON.stringify(data, null, 2));

    // Check if OpenAI returned an error
    if (data.error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          answer: "OpenAI Error: " + data.error.message
        })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        answer: data.choices[0].message.content
      })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        answer: "Server Error: " + err.message
      })
    };
  }
};