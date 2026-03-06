import {SendCodeUserDTO} from '../dto/dtoUserSendCode'
import { Request, Response } from 'express';
import {SendCodeUserCase} from '../../../core/use-cases/userCaseSendCode'
import {AppError} from '../../../utils/erros/erros.js'

export class ControllerSendCode {
    constructor(private useCase: SendCodeUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { user, name } = req.body
            const userDTO = new SendCodeUserDTO({ name: name, user: user });
            const result = await this.useCase.execute(userDTO);
            return res.status(200).json({
                message: "Codigo temporario foi gerado, verifique seu email",
                data: result 
            });
        } catch (error: any) {
            //Erros da logica
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({
                    status: 'error',
                    message: error.message
                });
            }

            //Erro inesperado 
            console.error(error);
            return res.status(500).json({
                status: 'error',
                message: 'Internal server error'
            });
        }
    }
}