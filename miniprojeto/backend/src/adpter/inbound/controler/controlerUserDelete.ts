import {DeleteUserDTO} from '../dto/dtoUserDelete.js'
import { Request, Response } from 'express';
import {DeleteUserCase} from '../../../core/use-cases/userCaseDelete.js'

export class ControllerDelete {
    constructor(private useCase: DeleteUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const userDTO = new DeleteUserDTO(req.body);
            const result = await this.useCase.execute(userDTO);
            return res.status(201).json({
                message: "Usuário deletado com sucesso!",
                data: result 
            });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}