import {ByIdUserDTO} from '../dto/dtoUserById.js'
import { Request, Response } from 'express'
import {ByIdUserCase} from '../../../core/use-cases/userCaseById.js'

export class ControllerById {
    constructor(private useCase: ByIdUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const idDoToken = req.idUser
            const { user } = req.body
            const userDTO = new ByIdUserDTO({ idUser: idDoToken, user: user  })
            const result = await this.useCase.execute(userDTO)
            return res.status(201).json(result)
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }
}