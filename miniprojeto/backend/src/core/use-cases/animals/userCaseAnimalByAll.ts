import {IAnimalRepository} from '../../port/repository/interfaceRepositoryAnimals.js'
import { IByAllAnimalRequest } from '../../port/userCase/interfaceUserCaseAnimals.js'
import { IUserRepository } from '../../port/repository/interfaceRepository.js'
import {Animal} from '../../entities/entitiesAnimals.js'
import { NotFoundError} from '../../../utils/erros/erros.js'

export class ByAllAnimalUserCase{
    constructor(private byAllAnimalRepository: IAnimalRepository, private byIdUserRepository:IUserRepository) {}
    async execute({idUser, idView}: IByAllAnimalRequest): Promise<Animal[]> {
        if( idUser == null){
            throw new NotFoundError("Usuario não informado")
        }

        let idSend: number = idUser

        const idUserExists = await this.byIdUserRepository.findById(idUser)

        if(!idUserExists){
            throw new NotFoundError("Não conseguimos localizar o seu usuario")
        }

        if(idUserExists.admin){
            if(idView != null || idView != undefined ){
                idSend = idView
            }
        }else{
            if(idView != null || idView != undefined && idView != idUser){
                throw new NotFoundError("Você só pode visualizar o seu usuario")
            }
        }

        return await this.byAllAnimalRepository.seeAllAnimal(idSend)

    } 
}