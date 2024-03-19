/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// document.getElementById('message-form').addEventListener('submit', function (event) {\n//     event.preventDefault();\n//     const messageInput = document.getElementById('message-input');\n//     const message = messageInput.value.trim();\n//     if (message !== '') {\n//         sendMessage(message);\n//         messageInput.value = '';\n//     }\n// });\n// function sendMessage(message) {\n//     ws.send(JSON.stringify({ message }));\n// }\n// const ws = new WebSocket('ws://localhost:5500')\n// ws.onmessage = (event) => {\n\n//     const messageData = JSON.parse(event.data);\n//     const message = messageData.message;\n//     const time = messageData.time;\n\n//     const chat = document.getElementById('chat');\n//     const messageElement = document.createElement('div');\n//     messageElement.innerHTML = \"<p>\" + time + message + \"</p>\";\n//     chat.appendChild(messageElement);\n// }\n// ws.onopen = () => {\n//     console.log(\"connected\")\n//     ws.send('Hello from client')\n// }\n// ws.onclose = () => {\n//     console.log('Disconnected')\n// }\ndebugger;\nvar ws = new WebSocket('ws://localhost:5500');\n\n// Add event listener for the message form submission\nvar button = document.getElementById('submit');\nbutton.addEventListener('click', function () {\n  var messageInput = document.getElementById('message-input');\n  var message = messageInput.value.trim();\n  if (message !== '') {\n    sendMessage(message);\n    messageInput.value = '';\n  }\n  function sendMessage(message) {\n    ws.send(JSON.stringify({\n      message: message\n    }));\n  }\n});\n\n// Function to send a message to the server\n\n// Event listener for incoming messages from the server\nws.onmessage = function (event) {\n  var messageData = JSON.parse(event.data);\n  var message = messageData.message;\n  var chat = document.getElementById('chat');\n  var messageElement = document.createElement('div');\n\n  // Format the time for display (example format)\n\n  // Sanitize the message before adding it to the chat window\n  messageElement.innerHTML = \"<p> \".concat(sanitizeMessage(message), \"</p>\");\n  console.log(event.data);\n  console.log(messageData);\n  console.log(message);\n  chat.appendChild(messageElement);\n};\n\n// Function to sanitize the message (example)\nfunction sanitizeMessage(message) {\n  // You can implement sanitization logic here, such as escaping HTML characters\n  // or using a library like DOMPurify\n  return message.replace(/</g, '&lt;').replace(/>/g, '&gt;');\n}\n\n// Event handler for successful connection\nws.onopen = function () {\n  console.log(\"Connected to the server\");\n  // You can perform additional actions upon successful connection, if needed\n};\n\n// Event handler for WebSocket connection close\nws.onclose = function () {\n  console.log('Disconnected from the server');\n  // You can handle reconnection logic here, if needed\n};\n\n// Event handler for WebSocket connection errors\nws.onerror = function (error) {\n  console.error('WebSocket connection error:', error);\n  // You can handle error scenarios here, such as displaying an error message to the user\n};\n\n// const socket = new WebSocket('ws://localhost:3000'); // URL сервера WebSocket\n\n// // Функція для відправлення повідомлення на сервер WebSocket\n\n// // Функція для обробки повідомлень від сервера WebSocket\n// socket.onmessage = function (event) {\n//\n// }\n\n// // Обробник події надсилання форми\n\n//# sourceURL=webpack://-fe_pro_homework_27/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;