import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Interface apenas com o que você vai usar do token
interface TokenPayload {
    idUser: number;
    iat: number;
    exp: number;
}

export const authMiddleware = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as TokenPayload;

        // Injeta apenas o idUser na requisição
        req.idUser = decoded.idUser

        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido' });
    }
};