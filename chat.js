document.getElementById('sendBtn').addEventListener('click', sendMessage);
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return;

    appendMessage('user-message', userInput);
    document.getElementById('userInput').value = '';

    setTimeout(() => {
        getBotResponse(userInput);
    }, 1000);
}

function appendMessage(type, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + type;
    messageDiv.textContent = text;
    document.getElementById('chatMessages').appendChild(messageDiv);
    document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
}

function getBotResponse(userInput) {
    let botResponse = '';

    // Here you can add more sophisticated logic or even integrate a chatbot API
    if (userInput.toLowerCase().includes('anxiety')) {
        botResponse = 'It sounds like you are feeling anxious. Remember to take deep breaths and focus on your breathing. How else can I help?';
    } else if (userInput.toLowerCase().includes('depression')) {
        botResponse = 'I\'m sorry to hear you\'re feeling down. It\'s important to talk to someone you trust about your feelings. How else can I assist?';
    } else {
        botResponse = 'I\'m here to help. Can you tell me more about what you\'re experiencing?';
    }

    appendMessage('bot-message', botResponse);
}
