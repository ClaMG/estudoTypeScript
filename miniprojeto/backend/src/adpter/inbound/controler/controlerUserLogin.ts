import {LoginUserDTO} from '../dto/dtoUserLogin.js'
import { Request, Response } from 'express';
import {LoginUserCase} from '../../../core/use-cases/userCaseLogin.js'

export class ControllerLogin {
    constructor(private useCase: LoginUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const userDTO = new LoginUserDTO(req.body);
            const result = await this.useCase.execute(userDTO);
            return res.status(201).json(result);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}