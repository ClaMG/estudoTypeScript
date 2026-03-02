import {IAnimalRepository} from '../../port/repository/interfaceRepositoryAnimals.js'
import { IDeleteAnimalRequest } from '../../port/userCase/interfaceUserCaseAnimals.js'
import { IUserRepository } from '../../port/repository/interfaceRepository.js'
import { NotFoundError} from '../../../utils/erros/erros.js'


export class DeleteAnimalUserCase{
    constructor(private deleteAnimalRepository: IAnimalRepository, private byIdUserRepository:IUserRepository) {}
    async execute({ idUser, id, name}: IDeleteAnimalRequest): Promise<void> {
        if(id == null || idUser == null || name == null){
            throw new NotFoundError("Preencha todos os campos")
        }

        const idUserExists = await this.byIdUserRepository.findById(idUser)

        if(!idUserExists){
            throw new NotFoundError("Não conseguimos localizar o seu usuario")
        }

        const idExists = await this.deleteAnimalRepository.findByAnimalId(id)

        if(!idExists){
            throw new NotFoundError("Não conseguimos localizar o pet")
        }

        if(name != idExists.name){
            throw new NotFoundError("Esse não é o nome do pet")
        }

        if(!idUserExists.admin && idUser != idExists.idUser){
            throw new NotFoundError("Esse pet não é seu")
        }

        await this.deleteAnimalRepository.delete(id)

    } 
}