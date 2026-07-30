async function askAI(questionFromButton = null) {

    const questionBox = document.getElementById("question");

    const question = questionFromButton || questionBox.value.trim();

    if (question === "") return;

    const chat = document.getElementById("chatWindow");

    // User message
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = question;
    chat.appendChild(userMessage);

    questionBox.value = "";

    // AI Thinking Animation
    const typing = document.createElement("div");
    typing.className = "bot-message";
    typing.id = "typing";

    typing.innerHTML = `
        <div class="thinking">
            <div class="thinking-title">
                🤖 AI Assistant
            </div>

            <div id="thinkingText">
                Analyzing your issue...
            </div>

            <div class="thinking-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;

    chat.appendChild(typing);

    chat.scrollTop = chat.scrollHeight;

    // Rotate thinking messages
    const thinkingMessages = [

        "Analyzing your issue...",

        "Searching knowledge base...",

        "Checking troubleshooting paths...",

        "Preparing recommendation..."

    ];

    let thinkingIndex = 0;

    const thinkingInterval = setInterval(() => {

        const text = document.getElementById("thinkingText");

        if (text) {

            thinkingIndex++;

            text.textContent =
                thinkingMessages[
                    thinkingIndex % thinkingMessages.length
                ];

        }

    }, 900);

    try {

        const response = await fetch("/.netlify/functions/chat", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                question: question

            })

        });

        const data = await response.json();

        clearInterval(thinkingInterval);

        if (document.getElementById("typing")) {

            document.getElementById("typing").remove();

        }

        // Bot Response
        const botMessage = document.createElement("div");

        botMessage.className = "bot-message";

        botMessage.innerHTML =
            "🤖 " + data.reply.replace(/\n/g, "<br>");

        chat.appendChild(botMessage);

        // Display Buttons
        if (data.buttons && data.buttons.length > 0) {

            const buttonContainer = document.createElement("div");

            buttonContainer.className = "button-container";

            data.buttons.forEach(option => {

                const button = document.createElement("button");

                button.className = "chat-option";

                button.textContent = option;

                button.onclick = function () {

                    buttonContainer.remove();

                    askAI(option);

                };

                buttonContainer.appendChild(button);

            });

            chat.appendChild(buttonContainer);

        }

        chat.scrollTop = chat.scrollHeight;

    } catch (error) {

        clearInterval(thinkingInterval);

        if (document.getElementById("typing")) {

            document.getElementById("typing").remove();

        }

        const botMessage = document.createElement("div");

        botMessage.className = "bot-message";

        botMessage.textContent =
            "🤖 Unable to contact the AI Helpdesk server.";

        chat.appendChild(botMessage);

    }

}

// Send when pressing Enter
document.getElementById("question").addEventListener("keydown", function (event) {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        askAI();

    }

});
