import {ForgetPasswordUserDTO} from '../dto/dtoUserSendPassword'
import { Request, Response } from 'express';
import {VeryPasswordUserCase} from '../../../core/use-cases/userCaseVerityPassword'
import {AppError} from '../../../utils/erros/erros.js'

export class ControllerForgetPassword {
    constructor(private useCase: VeryPasswordUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { user, code } = req.body
            const userDTO = new ForgetPasswordUserDTO({ code: code, user: user });
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