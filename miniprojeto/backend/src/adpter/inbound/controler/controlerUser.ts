import {RegisterUserDTO} from '../dto/dtoUser.js'
import { Request, Response } from 'express';
import {CreateUserCase} from '../../../core/use-cases/userCaseCreate.js'

export class ControllerCreate {
    constructor(private useCase: CreateUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const userDTO = new RegisterUserDTO(req.body);
            const result = await this.useCase.execute(userDTO);
            return res.status(201).json(result);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}