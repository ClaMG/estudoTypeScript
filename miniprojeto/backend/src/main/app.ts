import express from 'express';
import cors, { CorsOptions } from 'cors';
import routerUser from '../adpter/inbound/routes/routesUser.js';
import routerAnimal from '../adpter/inbound/routes/routesAnimals.js';
import pinoHttp from 'pino-http';
import { logger } from '../cofig/configPino.js';
import { globalErrorHandler } from '../utils/erros/erroApi.js';
const app = express();

app.use(pinoHttp({ 
  logger,
  redact: ['req.body.password', 'req.headers.authorization'] 
}));

const corsOptions: CorsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions))

app.use(express.json())

app.use('/user', routerUser)
app.use('/animal', routerAnimal)

app.use(globalErrorHandler);

export default app