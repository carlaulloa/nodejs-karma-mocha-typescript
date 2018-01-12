import * as express from 'express';

import * as morgan from 'morgan';
import * as cors from 'cors';

const app = express();

const port = 8001;
const baseUrl = `http://localhost:${port}`;
const router = express.Router();

app.use('/', express.static('dist', { index: false }));

app.use(morgan('dev'));

app.use(cors());

app.get('/data', (req, res) => {
  res.status(200).send("exitoo");
});

app.get('/data2', (req, res) => {
  res.status(200).json({ data: 100 });
});

app.listen(port, () => {
  console.log(`Listening at ${baseUrl}`);
});
