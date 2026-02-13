import {ByAllAnimalDTO} from '../../dto/animal/dtoAnimalByAll.js'
import {Request, Response } from 'express';
import {ByAllAnimalUserCase} from '../../../../core/use-cases/animals/userCaseAnimalByAll.js'

export class ControllerByAllAnimal {
    constructor(private animalCase: ByAllAnimalUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const idDoToken = req.idUser
            const { idView } = req.body
            const animalDTO = new ByAllAnimalDTO({ 
                idUser:idDoToken, 
                idView: idView || null, 
                });
            const result = await this.animalCase.execute(animalDTO);
            return res.status(201).json( result );
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}