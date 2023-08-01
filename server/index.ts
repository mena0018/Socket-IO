import http from 'http';
import { Server } from 'socket.io';
import express, { Express, Request, Response } from 'express';

const port = '8888';
const app: Express = express();
const server = http.createServer(app);

app.get('/', (req: Request, res: Response) => {
  res.json('Express + TypeScript Server');
});

server.listen(port, () => {
  console.log(`⚡[server]: Server is running at http://localhost:${port}`);
});

/*************** WEBSOCKET ****************/

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on('send_message', (data) => {
    socket.broadcast.emit('receive_message', data);
  });
});
