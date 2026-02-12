import {IUserRepository} from '../port/interfaceRepository.js'
import {User} from '../entities/entitiesUser.js'
import {IDeleteRequest} from '../port/interfaceUserCase.js'

export class DeleteUserCase{
    constructor(private deleteUserRepository: IUserRepository) {}

    async execute({idUser, user}:IDeleteRequest): Promise<void> {
        if(idUser == null || user == '' ){
            throw new Error("Preencha todos os campos")
        }

        const idExists = await this.deleteUserRepository.findById(idUser)

        if(!idExists){
            throw new Error("Não conseguimos indetificar o seu usuario")
        }

        const userExists = await this.deleteUserRepository.findByUser(user)

        if(!userExists){
            throw new Error("Usuario não existe")
        }

        if(userExists.id == 1){//Admin supremo
            throw new Error("Este Usuario não pode ser deletado")
        }

        if(!idExists.admin && idUser != userExists.id){//user comum tentando deletar outro user
            throw new Error("Você não é admin, não pode deletar outros usuarios")
        }
        
        if(idExists.admin && idUser == userExists.id){//adm tentando deletar si mesmo
            throw new Error("Usuario ativo no momento")
        }

        await this.deleteUserRepository.delete(userExists.id)

    }
}