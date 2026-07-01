async function askAI() {

    const question = document.getElementById("question").value;

    document.getElementById("response").innerText = "Thinking...";

    try {

        const response = await fetch("/.netlify/functions/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question })
        });

        const data = await response.json();

        document.getElementById("response").innerText = data.answer;

    } catch (err) {

        document.getElementById("response").innerText =
            "Error: " + err.message;

    }

}