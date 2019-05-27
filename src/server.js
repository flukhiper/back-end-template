import dotenv from 'dotenv'
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes'

dotenv.config()

const server = express();

const PORT = process.env.NODE_PORT;

server.use(
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({
    extended: true,
  }),
  routes,
);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
