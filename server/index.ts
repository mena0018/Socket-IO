import http from 'http';
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const server = http.createServer(app);
const port = '8888';

app.get('/', (req: Request, res: Response) => {
  res.json('Express + TypeScript Server');
});

server.listen(port, () => {
  console.log(`⚡[server]: Server is running at http://localhost:${port}`);
});
