
// document.getElementById('message-form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     const messageInput = document.getElementById('message-input');
//     const message = messageInput.value.trim();
//     if (message !== '') {
//         sendMessage(message);
//         messageInput.value = '';
//     }
// });
// function sendMessage(message) {
//     ws.send(JSON.stringify({ message }));
// }
// const ws = new WebSocket('ws://localhost:5500')
// ws.onmessage = (event) => {

//     const messageData = JSON.parse(event.data);
//     const message = messageData.message;
//     const time = messageData.time;

//     const chat = document.getElementById('chat');
//     const messageElement = document.createElement('div');
//     messageElement.innerHTML = "<p>" + time + message + "</p>";
//     chat.appendChild(messageElement);
// }
// ws.onopen = () => {
//     console.log("connected")
//     ws.send('Hello from client')
// }
// ws.onclose = () => {
//     console.log('Disconnected')
// }
debugger
const ws = new WebSocket('ws://localhost:5500');

// Add event listener for the message form submission
const button = document.getElementById('submit');
button.addEventListener('click', () => {

    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    if (message !== '') {
        sendMessage(message);
        messageInput.value = '';
    }
    function sendMessage(message) {
        ws.send(JSON.stringify({ message }));
    }
});

// Function to send a message to the server


// Event listener for incoming messages from the server
ws.onmessage = (event) => {
    const messageData = JSON.parse(event.data);
    const message = messageData.message;
    const chat = document.getElementById('chat');
    const messageElement = document.createElement('div');

    // Format the time for display (example format)

    // Sanitize the message before adding it to the chat window
    messageElement.innerHTML = `<p> ${sanitizeMessage(message)}</p>`;
    console.log(event.data);
    console.log(messageData);
    console.log(message);

    chat.appendChild(messageElement);
}

// Function to sanitize the message (example)
function sanitizeMessage(message) {
    // You can implement sanitization logic here, such as escaping HTML characters
    // or using a library like DOMPurify
    return message.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Event handler for successful connection
ws.onopen = () => {
    console.log("Connected to the server");
    // You can perform additional actions upon successful connection, if needed
}

// Event handler for WebSocket connection close
ws.onclose = () => {
    console.log('Disconnected from the server');
    // You can handle reconnection logic here, if needed
}

// Event handler for WebSocket connection errors
ws.onerror = (error) => {
    console.error('WebSocket connection error:', error);
    // You can handle error scenarios here, such as displaying an error message to the user
}

// const socket = new WebSocket('ws://localhost:3000'); // URL сервера WebSocket

// // Функція для відправлення повідомлення на сервер WebSocket


// // Функція для обробки повідомлень від сервера WebSocket
// socket.onmessage = function (event) {
//
// }

// // Обробник події надсилання форми
