import {UpdateAnimalDTO} from '../../dto/animal/dtoAnimalUpdate.js'
import {Request, Response } from 'express';
import {UpdateAnimalUserCase} from '../../../../core/use-cases/animals/userCaseAnimalUpdate.js'

export class ControllerUpdateAnimal {
    constructor(private animalCase: UpdateAnimalUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const idDoToken = req.idUser
            const {id, name, age, species, gender } = req.body
            const animalDTO = new UpdateAnimalDTO({ 
                id:id, 
                idUser:idDoToken, 
                name: name, 
                age: age, 
                species: species, 
                gender: gender });
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