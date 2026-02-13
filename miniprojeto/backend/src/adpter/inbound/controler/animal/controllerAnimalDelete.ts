import {DeleteAnimalDTO} from '../../dto/animal/dtoAnimalDelete.js'
import {Request, Response } from 'express';
import {DeleteAnimalUserCase} from '../../../../core/use-cases/animals/userCaseAnimalDelet.js'
import {AppError} from '../../../../utils/erros/erros.js'

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
                message: "Animal deletado com sucesso!",
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