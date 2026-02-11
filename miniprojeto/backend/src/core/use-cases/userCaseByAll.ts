import {User} from '../entities/entitiesUser.js'
import {IUserRepository} from '../port/interfaceRepository.js'
import {IByAllRequest} from '../port/interfaceUserCase.js'
export class ByAllUserCase{
    constructor(private byAllUserRepository: IUserRepository) {}

    async execute({idUser}: IByAllRequest): Promise<User> {
        if(idUser == null){
            throw new Error("Não conseguimos indetificar o seu usuario")
        }

        const idExists = await this.byAllUserRepository.findById(idUser)

        if(!idExists){
            throw new Error("Não conseguimos indetificar o seu usuario")
        }

        if(!idExists.admin){
            throw new Error("Você não é admin, não pode visualizar outros usuarios")
        }

        

        return idExists
    } 
}