import {RequestAdminUserDTO} from '../dto/dtoUserRequestAdmin'
import { Request, Response } from 'express';
import {ByAdminUserCase} from '../../../core/use-cases/userCaseByAdmin'
import {AppError} from '../../../utils/erros/erros.js'

export class ControllerRequestAdmin {
    constructor(private useCase: ByAdminUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const idDoToken = req.idUser
            const { user } = req.body
            const userDTO = new RequestAdminUserDTO({ idUser: idDoToken, user: user });
            const result = await this.useCase.execute(userDTO);
            return res.status(200).json({
                message: "O admin foi notificado, aguarde um email resposta",
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