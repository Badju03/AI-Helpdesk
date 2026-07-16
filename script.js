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

    // Typing indicator
    const typing = document.createElement("div");
    typing.className = "bot-message";
    typing.id = "typing";
    typing.textContent = "🤖 Typing...";
    chat.appendChild(typing);

    chat.scrollTop = chat.scrollHeight;

    questionBox.value = "";

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

        document.getElementById("typing").remove();

        // Bot message
        const botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.innerHTML =
    "🤖 " + data.reply.replace(/\n/g, "<br>");
        chat.appendChild(botMessage);

        // Display buttons if available
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

        if (document.getElementById("typing")) {
            document.getElementById("typing").remove();
        }

        const botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.textContent = "🤖 Server error.";
        chat.appendChild(botMessage);

    }

}

// Press Enter to send
document.getElementById("question").addEventListener("keydown", function (event) {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        askAI();

    }

});
