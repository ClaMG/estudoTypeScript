import express, { Request, Response, NextFunction } from 'express';
import cors, { CorsOptions } from 'cors';

const app = express();

const corsOptions: CorsOptions = {
  origin: 'http://localhost:5173', // Endereço do seu Frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Erro não tratado:', err.stack);
    
    res.status(500).json({ 
        message: 'Ocorreu um erro interno no servidor.' 
    });
});

export default app