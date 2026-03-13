import express, { Request, Response, NextFunction } from 'express';
import cors, { CorsOptions } from 'cors';
import routerUser from '../adpter/inbound/routes/routesUser.js';
import routerAnimal from '../adpter/inbound/routes/routesAnimals.js';
const app = express();


const corsOptions: CorsOptions = {
  origin: 'http://localhost:5174',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions))

app.use(express.json())

app.use('/user', routerUser)
app.use('/animal', routerAnimal)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Erro não tratado:', err.stack);
    
    res.status(500).json({ 
        message: 'Ocorreu um erro interno no servidor.' 
    });
});

export default app