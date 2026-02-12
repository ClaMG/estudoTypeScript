import {CreateAnimalDTO} from '../../dto/animal/dtoAnimalCreate.js'
import {Request, Response } from 'express';
import {CreateAnimalUserCase} from '../../../../core/use-cases/animals/userCaseAnimalCreate.js'

export class ControllerCreateAnimal {
    constructor(private animalCase: CreateAnimalUserCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const idDoToken = req.idUser
            const { name, age, species, gender } = req.body
            const animalDTO = new CreateAnimalDTO({ 
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