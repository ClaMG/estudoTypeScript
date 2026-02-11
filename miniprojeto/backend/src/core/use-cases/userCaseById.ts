import {User} from '../entities/entitiesUser.js'
import {IUserRepository} from '../port/interfaceRepository.js'
import {IByIdRequest} from '../port/interfaceUserCase.js'
export class ByIdUserCase{
    constructor(private byIdUserRepository: IUserRepository) {}

    async execute({idUser}:IByIdRequest): Promise<User> {
        if(idUser == null){
            throw new Error("Não conseguimos indetificar o seu usuario")
        }

        const idExists = await this.byIdUserRepository.findById(idUser)

        if(!idExists){
            throw new Error("Não conseguimos indetificar o seu usuario")
        }

        return idExists
    } 
}