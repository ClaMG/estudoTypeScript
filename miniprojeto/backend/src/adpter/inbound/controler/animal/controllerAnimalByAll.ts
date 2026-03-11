import {ByAllAnimalDTO} from '../../dto/animal/dtoAnimalByAll.js'
import {Request, Response } from 'express';
import {ByAllAnimalUserCase} from '../../../../core/use-cases/animals/userCaseAnimalByAll.js'
import {AppError} from '../../../../utils/erros/erros.js'

export class ControllerByAllAnimal {
    constructor(private animalCase: ByAllAnimalUserCase) {}

    async handle(req: Request<{ idView: number }>, res: Response): Promise<Response> {
        try {
            const idDoToken = req.idUser
            const { idView } = req.params
            const animalDTO = new ByAllAnimalDTO({ 
                idUser:idDoToken, 
                idView: idView, 
                });
            const result = await this.animalCase.execute(animalDTO);
            return res.status(201).json( result );
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