import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { ValidationError } from 'sequelize';
import { AppError } from './erros'; 

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const isDev = process.env.NODE_ENV === 'development';

  //Log único e detalhado
  req.log.error({ 
    err, 
    path: req.path, 
    method: req.method 
  }, 'Erro capturado pelo Middleware Global');

  //Erro conhecido
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  //Erro de Validação do Zod
  if (err instanceof ZodError) {
    return res.status(400).json({
      status: 'Validation Error',
      errors: err.issues.map(issue => ({
        path: issue.path.join('.'),
        message: issue.message
      }))
    });
  }

  //Erro do Sequelize
  if (err instanceof ValidationError) {
    return res.status(422).json({
      status: 'Database Validation Error',
      errors: err.errors.map(e => ({ field: e.path, message: e.message }))
    });
  }

  //Erro Genérico
  const statusCode = err.status || 500;
  const message = statusCode === 500 && !isDev 
    ? 'Ocorreu um erro interno no servidor.' 
    : err.message;

  return res.status(statusCode).json({
    status: 'error',
    message,
    ...(isDev && { stack: err.stack }) 
  });
  
};