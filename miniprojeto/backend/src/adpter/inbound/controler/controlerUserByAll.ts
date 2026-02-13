import {ByAllUserDTO} from '../dto/dtoUserByAll.js'
import { Request, Response } from 'express'
import {ByAllUserCase} from '../../../core/use-cases/userCaseByAll.js'
import {AppError} from '../../../utils/erros/erros.js'
export class ControllerByAll {
    constructor(private useCase: ByAllUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const idDoToken = req.idUser; 

            const userDTO = new ByAllUserDTO({ idUser: idDoToken })
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
                message: 'Erro interno do servidor'
            });
        }
    }
}