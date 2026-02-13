import {LoginUserDTO} from '../dto/dtoUserLogin.js'
import { Request, Response } from 'express';
import {LoginUserCase} from '../../../core/use-cases/userCaseLogin.js'
import {AppError} from '../../../utils/erros/erros.js'

export class ControllerLogin {
    constructor(private useCase: LoginUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const userDTO = new LoginUserDTO(req.body);
            const result = await this.useCase.execute(userDTO);
            return res.status(200).json({
                message: "Usuário logado com sucesso!",
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