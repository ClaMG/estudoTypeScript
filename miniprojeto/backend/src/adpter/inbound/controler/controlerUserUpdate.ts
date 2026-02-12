import {UpdateUserDTO} from '../dto/dtoUserUpdate.js'
import { Request, Response } from 'express';
import {UpdateUserCase} from '../../../core/use-cases/userCaseUpdate.js'

export class ControllerUpdate {
    constructor(private useCase: UpdateUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const userDTO = new UpdateUserDTO(req.body);
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