"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const express_1 = __importDefault(require("express"));
const port = '8888';
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.get('/', (req, res) => {
    res.json('Express + TypeScript Server');
});
server.listen(port, () => {
    console.log(`⚡[server]: Server is running at http://localhost:${port}`);
});
/*************** WEBSOCKET ****************/
const io = new socket_io_1.Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});
io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);
    socket.on('send_message', (data) => {
        console.log(data);
        socket.broadcast.emit('receive_message', data);
    });
});
