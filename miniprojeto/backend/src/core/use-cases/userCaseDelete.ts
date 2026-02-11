import {IUserRepository} from '../port/interfaceRepository.js'
import {User} from '../entities/entitiesUser.js'
import {IDeleteRequest} from '../port/interfaceUserCase.js'

export class DeleteUserCase{
    constructor(private deleteUserRepository: IUserRepository) {}

    async execute({idUser, name}:IDeleteRequest): Promise<void> {
        if(idUser == null || name == '' ){
            throw new Error("Preencha todos os campos")
        }

        const idExists = await this.deleteUserRepository.findById(idUser)

        if(!idExists){
            throw new Error("Não conseguimos indetificar o seu usuario")
        }

        const userExists = await this.deleteUserRepository.findByName(name)

        if(!userExists){
            throw new Error("Nome de usuario não existe")
        }

        if(!idExists.admin && idUser != userExists.id){
            throw new Error("Você não é admin, não pode deletar outros usuarios")
        }
        
        if(idExists.admin && idUser == userExists.id){
            throw new Error("Usuario ativo no momento")
        }

        await this.deleteUserRepository.delete(userExists.id)

    }
}