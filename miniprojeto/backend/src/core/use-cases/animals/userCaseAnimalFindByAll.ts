import {IAnimalRepository} from '../../port/interfaceRepositoryAnimals.js'
import { IByAllAnimalRequest } from '../../port/interfaceUserCaseAnimals.js'
import { IUserRepository } from '../../port/interfaceRepository.js'

export class ByAllAnimalUserCase{
    constructor(private byAllAnimalRepository: IAnimalRepository, private byIdUserRepository:IUserRepository) {}
    async execute({idUser, idView}: IByAllAnimalRequest): Promise<void> {
        if( idUser == null){
            throw new Error("Usuario não informado")
        }

        const idUserExists = await this.byIdUserRepository.findById(idUser)

        if(!idUserExists){
            throw new Error("Não conseguimos localizar o seu usuario")
        }

        if(idUserExists.admin && idView == null){
            throw new Error("Você deve informar o id que quer visualizar")
        }

        if(!idUserExists.admin && idView != null){
            throw new Error("Você não pode escolher um usuario para visualizar")
        }

        await this.byAllAnimalRepository.seeAllAnimal(idUser)

    } 
}