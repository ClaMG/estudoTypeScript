import {IAnimalRepository} from '../../port/interfaceRepositoryAnimals.js'
import { IDeleteAnimalRequest } from '../../port/interfaceUserCaseAnimals.js'
import { IUserRepository } from '../../port/interfaceRepository.js'

export class DeleteAnimalUserCase{
    constructor(private deleteAnimalRepository: IAnimalRepository, private byIdUserRepository:IUserRepository) {}
    async execute({ idUser, id, name}: IDeleteAnimalRequest): Promise<void> {
        if(id == null || idUser == null || name == null){
            throw new Error("Preencha todos os campos")
        }

        const idUserExists = await this.byIdUserRepository.findById(idUser)

        if(!idUserExists){
            throw new Error("Não conseguimos localizar o seu usuario")
        }

        const idExists = await this.deleteAnimalRepository.findByAnimalId(id)

        if(!idExists){
            throw new Error("Não conseguimos localizar o pet")
        }

        if(name != idExists.name){
            throw new Error("Esse não é o nome do pet")
        }

        if(!idUserExists.admin && idUser != idExists.idUser){
            throw new Error("Esse pet não é seu")
        }

        await this.deleteAnimalRepository.delete(id)

    } 
}