import {UpdateAnimalDTO} from '../../dto/animal/dtoAnimalUpdate.js'
import {Request, Response } from 'express';
import {UpdateAnimalUserCase} from '../../../../core/use-cases/animals/userCaseAnimalUpdate.js'
import {AppError} from '../../../../utils/erros/erros.js'

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
                message: "Animal atualizado com sucesso!",
                data: result 
            });
        } catch (error: any) {
            //Erros da logica
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({
                    status: 'error',
                    message: error.message
                });
            }

            //Erro inesperado 
            console.error(error);
            return res.status(500).json({
                status: 'error',
                message: 'Internal server error'
            });
        }
    }
}