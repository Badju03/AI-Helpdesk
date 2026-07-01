async function askAI(){

    const questionBox=document.getElementById("question");

    const question=questionBox.value.trim();

    if(question==="") return;

    const chat=document.getElementById("chatWindow");

    // User Bubble
    chat.innerHTML+=`
        <div class="user-message">
            ${question}
        </div>
    `;

    // Typing Bubble
    chat.innerHTML+=`
        <div class="bot-message" id="typing">
            🤖 Typing...
        </div>
    `;

    chat.scrollTop=chat.scrollHeight;

    questionBox.value="";

    const response=await fetch("/.netlify/functions/chat",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            question:question
        })

    });

    const text = await response.text();

console.log("Server response:", text);

const data = JSON.parse(text);

    document.getElementById("typing").remove();

    chat.innerHTML+=`
        <div class="bot-message">
            🤖 ${data.answer}
        </div>
    `;

    chat.scrollTop=chat.scrollHeight;

}
