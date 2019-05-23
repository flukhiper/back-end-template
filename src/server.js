import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = express();

const PORT = process.env.PORT = 5000;

server.use(
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({
    extended: true,
  }),
);

server.get('/healthz', (req, res) => {
  res.send('OK');
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
