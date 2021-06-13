import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import { routes } from './routes';

import './database';

const app = express();

app.use(cors());
app.use(express.json());

routes(app);

app.get('/', (req, res) => res.json({ status: 'working!' }));

app.listen(8080, () => console.log('started on: http://localhost:8080'));