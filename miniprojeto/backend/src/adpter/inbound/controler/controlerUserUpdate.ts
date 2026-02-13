import {UpdateUserDTO} from '../dto/dtoUserUpdate.js'
import { Request, Response } from 'express';
import {UpdateUserCase} from '../../../core/use-cases/userCaseUpdate.js'
import {AppError} from '../../../utils/erros/erros.js'

export class ControllerUpdate {
    constructor(private useCase: UpdateUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const idDoToken = req.idUser
            const { id, user, name, email, password, admin } = req.body;
            const userDTO = new UpdateUserDTO({
                idUser: idDoToken, 
                user: user,
                id: id, 
                name: name, 
                email: email, 
                password: password, 
                admin: admin
            });
            const result = await this.useCase.execute(userDTO);
            return res.status(200).json({
                message: "Usuário atualizado com sucesso!",
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