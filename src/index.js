import express from 'express';
import cors from 'cors';
import { config } from './config.js';
import healthRouter from './routes/health.js';
import itemsRouter from './routes/items.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/health', healthRouter);
app.use('/api/items', itemsRouter);

app.listen(config.port, () => console.log(`Server online on port ${config.port}`));