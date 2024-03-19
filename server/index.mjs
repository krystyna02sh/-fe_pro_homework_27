import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'path';
import { fileURLToPath } from 'url'
import { WebSocketServer } from 'ws';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const server = fastify();

// Create a WebSocket server instance
const wss = new WebSocketServer({ port: 5500 });

// Array to store connected clients
const clients = [];

// Handle WebSocket connections
wss.on('connection', function connection(ws) {
    clients.push(ws);

    // Handle received messages
    ws.on('message', function incoming(message) {


        // Broadcast the message to all connected clients
        clients.forEach(client => {
            if (client.readyState === WebSocketServer.OPEN) {
                client.send(JSON.stringify(message));
            }
        });
    });

    // Send a welcome message when a client connects
    ws.send(JSON.stringify({ message: 'Welcome to the chat!' }));

    // Handle client disconnection
    ws.on('close', function () {
        clients.splice(clients.indexOf(ws), 1);
    });
});

// Handle WebSocket upgrade on the Fastify server
server.server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (socket) => {
        wss.emit('connection', socket, request);
    });
});
// const server = fastify();
// const wss = new WebSocketServer({ port: 5500 })
// const clients = []; // Масив для збереження підключених клієнтів

// // Обробка підключення нового користувача
// wss.on('connection', function connection(ws) {

//     clients.push(ws);

//     ws.on('message', function incoming(message) {
//         // Отримуємо поточний час
//         const currentTime = new Date().toLocaleTimeString();

//         // Створюємо об'єкт з повідомленням та часом надсилання
//         const messageData = {
//             message: message.toString(),
//             time: currentTime
//         }


//         // Надіслати отримане повідомлення разом з часом надсилання всім підключеним клієнтам
//         clients.forEach(client => {
//             // Перевіряємо, чи клієнт є відкритим перед відправкою повідомлення
//             if (client.readyState === WebSocketServer.OPEN) {
//                 client.send(messageData); // Надсилаємо об'єкт у форматі JSON
//             }
//         });
//     });


//     // Відправляємо клієнту ласкаво просимо при підключенні
//     ws.send(JSON.stringify({ message: 'Welcome to the chat!' }));
// });

// // Функція для відправки повідомлення всім підключеним клієнтам




// // Обробка WebSocket підключень на рівні HTTP сервера Fastify
// server.server.on('upgrade', (request, socket, head) => {
//     wss.handleUpgrade(request, socket, head, (socket) => {
//         wss.emit('connection', socket, request);
//     });
// });

server.register(fastifyStatic, {
    root: path.join(__dirname, '../client'),

})


server.listen({ port: 5550 })
    .then(() => {
        console.log("Server is started at 5550")
    })

// const server = fastify();
// const wss = new WebSocketServer({ port: 3000 });

// // Створюємо WebSocket сервер


// // Запускаємо сервер на порті 3000
// server.listen(3000, (err, address) => {
//     if (err) {
//         console.error(err);
//         process.exit(1);
//     }
//     console.log(`Server listening on ${address}`);
// });
