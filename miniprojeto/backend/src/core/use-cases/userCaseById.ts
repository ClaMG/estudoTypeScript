import {User} from '../entities/entitiesUser.js'
import {IUserRepository} from '../port/interfaceRepository.js'
import {IByIdRequest} from '../port/interfaceUserCase.js'
export class ByIdUserCase{
    constructor(private byIdUserRepository: IUserRepository) {}

    async execute({idUser, user}:IByIdRequest): Promise<User> {
        if(idUser == null){
            throw new Error("Não conseguimos indetificar o seu usuario")
        }

        const idExists = await this.byIdUserRepository.findById(idUser)

        if(!idExists){
            throw new Error("Não conseguimos indetificar o seu usuario")
        }

        const userExists = await this.byIdUserRepository.findByUser(user)

        if(!userExists){
            throw new Error("Não conseguimos indetificar o usuario que você deseja visualizar")
        }

        if(!idExists.admin && userExists.id != idUser){
            throw new Error("Você não é admin, não pode visualizar outros usuarios")
        }

        return userExists
    } 
}