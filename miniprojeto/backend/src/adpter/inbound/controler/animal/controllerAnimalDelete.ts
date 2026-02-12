import {DeleteAnimalDTO} from '../../dto/animal/dtoAnimalDelete.js'
import {Request, Response } from 'express';
import {DeleteAnimalUserCase} from '../../../../core/use-cases/animals/userCaseAnimalDelet.js'

export class ControllerDeleteAnimal {
    constructor(private animalCase: DeleteAnimalUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const idDoToken = req.idUser
            const {id, name}= req.body
            const animalDTO = new DeleteAnimalDTO({ 
                idUser:idDoToken, 
                name: name, 
                id: id, 
                 });
            const result = await this.animalCase.execute(animalDTO);
            return res.status(201).json({
                message: "Animal cadastrado com sucesso!",
                data: result 
            });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}