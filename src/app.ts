import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import { apiRouter } from './routes/api.route';
import dotenv from 'dotenv';

const app = express();

dotenv.load();

const env = (process.env.NODE_ENV || 'development').toUpperCase();

const port = process.env.PORT || 8001;
const baseUrl = `http://localhost:${port}`;

const router = express.Router();

app.use('/', express.static('dist', { index: false }));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.get('/data', (req, res) => {
  res.status(200).json({ data: 100 });
});

app.use('/api/v1', apiRouter());

connectToDB(env);

app.listen(port, () => {
  console.log(`Listening at ${baseUrl}`);
});

function connectToDB(env) {
  mongoose.connect(process.env[`DB_URI_${env}`]);
}
