import {IUserRepository} from '../port/repository/interfaceRepository.js'
import {IDeleteRequest} from '../port/userCase/interfaceUserCase.js'
import { NotFoundError} from '../../utils/erros/erros.js'

export class DeleteUserCase{
    constructor(private deleteUserRepository: IUserRepository) {}

    async execute({idUser, user}:IDeleteRequest): Promise<void> {
        if(idUser == null || user == '' ){
            throw new NotFoundError("Preencha todos os campos")
        }

        const idExists = await this.deleteUserRepository.findById(idUser)

        if(!idExists){
            throw new NotFoundError("Não conseguimos indetificar o seu usuario")
        }

        const userExists = await this.deleteUserRepository.findByUser(user)

        if(!userExists){
            throw new NotFoundError("Usuario não existe")
        }

        if(userExists.id == 1){//Admin supremo
            throw new NotFoundError("Este Usuario não pode ser deletado")
        }

        if(!idExists.admin && idUser != userExists.id){//user comum tentando deletar outro user
            throw new NotFoundError("Você não é admin, não pode deletar outros usuarios")
        }
        
        if(idExists.admin && idUser == userExists.id){//adm tentando deletar si mesmo
            throw new NotFoundError("Usuario ativo no momento")
        }

        await this.deleteUserRepository.delete(userExists.id)

    }
}