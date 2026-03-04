import {RequestAdminViewUserDTO} from '../dto/dtoUserRequestAdminView'
import { Request, Response } from 'express';
import {ByAdminViewUserCase} from '../../../core/use-cases/userCaseByAdminView'
import {AppError} from '../../../utils/erros/erros.js'

export class ControllerRequestAdmin {
    constructor(private useCase: ByAdminViewUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const idDoToken = req.idUser
            const userDTO = new RequestAdminViewUserDTO({ idUser: idDoToken });
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