import {UpdateUserDTO} from '../dto/dtoUserUpdate.js'
import { Request, Response } from 'express';
import {UpdateUserCase} from '../../../core/use-cases/userCaseUpdate.js'

export class ControllerUpdate {
    constructor(private useCase: UpdateUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const idDoToken = req.idUser
            const { id, name, email, password, admin } = req.body;
            const userDTO = new UpdateUserDTO({
                idUser: idDoToken, 
                id: id, 
                name: name, 
                email: email, 
                password: password, 
                admin: admin
            });
            const result = await this.useCase.execute(userDTO);
            return res.status(201).json({
                message: "Usuário atualizado com sucesso!",
                data: result 
            });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}