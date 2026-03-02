import {CreateUserDTO} from '../dto/dtoUserCreate.js'
import { Request, Response } from 'express';
import {CreateUserCase} from '../../../core/use-cases/userCaseCreate.js'
import {AppError} from '../../../utils/erros/erros.js'

export class ControllerCreate {
    constructor(private useCase: CreateUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const idDoToken = req.idUser
            const {user, name, email, password, admin } = req.body;
            const userDTO = new CreateUserDTO({
                idUser: idDoToken, 
                user: user,
                name: name, 
                email: email, 
                password: password, 
                admin: admin
            });
            const result = await this.useCase.execute(userDTO);
            return res.status(200).json({
                message: "Usuário cadastrado com sucesso!",
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