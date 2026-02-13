import {IAnimalRepository} from '../../port/interfaceRepositoryAnimals.js'
import { IByAllAnimalRequest } from '../../port/interfaceUserCaseAnimals.js'
import { IUserRepository } from '../../port/interfaceRepository.js'
import {Animal} from '../../entities/entitiesAnimals.js'

export class ByAllAnimalUserCase{
    constructor(private byAllAnimalRepository: IAnimalRepository, private byIdUserRepository:IUserRepository) {}
    async execute({idUser, idView}: IByAllAnimalRequest): Promise<Animal[]> {
        if( idUser == null){
            throw new Error("Usuario não informado")
        }

        let idSend: number = idUser

        const idUserExists = await this.byIdUserRepository.findById(idUser)

        if(!idUserExists){
            throw new Error("Não conseguimos localizar o seu usuario")
        }

        if(idUserExists.admin){
            if(idView != null || idView != undefined ){
                idSend = idView
            }
        }else{
            if(idView != null || idView != undefined && idView != idUser){
                throw new Error("Você só pode visualizar o seu usuario")
            }
        }

        return await this.byAllAnimalRepository.seeAllAnimal(idSend)

    } 
}