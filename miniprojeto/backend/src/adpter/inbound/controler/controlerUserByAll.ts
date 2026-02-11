import {ByAllUserDTO} from '../dto/dtoUserByAll.js'
import { Request, Response } from 'express';
import {ByAllUserCase} from '../../../core/use-cases/userCaseByAll.js'

export class ControllerByAll {
    constructor(private useCase: ByAllUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const userDTO = new ByAllUserDTO(req.body);
            const result = await this.useCase.execute(userDTO);
            return res.status(201).json(result);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}