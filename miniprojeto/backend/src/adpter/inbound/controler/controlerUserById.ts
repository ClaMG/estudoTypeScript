import {ByIdUserDTO} from '../dto/dtoUserById.js'
import { Request, Response } from 'express'
import {ByIdUserCase} from '../../../core/use-cases/userCaseById.js'
import {AppError} from '../../../utils/erros/erros.js'

export class ControllerById {
    constructor(private useCase: ByIdUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const idDoToken = req.idUser
            const { user } = req.query;          
            const userBusca = user ? String(user) : "";  
            const userDTO = new ByIdUserDTO({ idUser: idDoToken, user: userBusca  })
            const result = await this.useCase.execute(userDTO)
            return res.status(200).json(result)
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