import {DeleteUserDTO} from '../dto/dtoUserDelete.js'
import { Request, Response } from 'express';
import {DeleteUserCase} from '../../../core/use-cases/userCaseDelete.js'
import {AppError} from '../../../utils/erros/erros.js'

export class ControllerDelete {
    constructor(private useCase: DeleteUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const idDoToken = req.idUser
            const { user } = req.body

            const userDTO = new DeleteUserDTO({ idUser: idDoToken, user: user  });
            const result = await this.useCase.execute(userDTO);
            return res.status(200).json({
                message: "Usuário deletado com sucesso!",
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