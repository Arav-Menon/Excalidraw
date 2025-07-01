"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on('connection', (socket) => {
    socket.on('message', (mssg) => {
        console.log(`Recieve data from client ${mssg}`);
    });
    socket.send('Something');
});
