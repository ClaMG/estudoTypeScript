import {IAnimalRepository} from '../../port/interfaceRepositoryAnimals.js'
import { IDeleteAnimalRequest } from '../../port/interfaceUserCaseAnimals.js'

export class DeleteAnimalUserCase{
    constructor(private deleteAnimalRepository: IAnimalRepository) {}
    async execute({ idUser, id, name}: IDeleteAnimalRequest): Promise<void> {
        if(id == null || idUser == null || name == null){
            throw new Error("Preencha todos os campos")
        }

        const idExists = await this.deleteAnimalRepository.findByAnimalId(id)

        if(!idExists){
            throw new Error("Esse codigo não exite para nenhum pet")
        }

        if(idUser != idExists.idUser){
            throw new Error("Esse codigo não é do seu pet")
        }

        if(name == idExists.name){
            throw new Error("Esse pet não é referente a esse codigo")
        }

        await this.deleteAnimalRepository.delete(id)

    } 
}