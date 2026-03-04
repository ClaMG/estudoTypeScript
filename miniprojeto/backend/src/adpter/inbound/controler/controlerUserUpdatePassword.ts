import {UpdatePasswordUserDTO} from '../dto/dtoUserUpdatePassword'
import { Request, Response } from 'express';
import {SendCodeUserCase} from '../../../core/use-cases/userCaseSendCode'
import {AppError} from '../../../utils/erros/erros.js'

export class ControllerUpdatePassword {
    constructor(private useCase: SendCodeUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { user, name } = req.body
            const userDTO = new UpdatePasswordUserDTO({ name: name, user: user });
            const result = await this.useCase.execute(userDTO);
            return res.status(200).json({
                message: "Senha atualizada com sucesso, verifique seu email",
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