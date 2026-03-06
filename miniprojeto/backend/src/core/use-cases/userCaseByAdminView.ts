import {User} from '../entities/entitiesUser.js'
import {IUserRepository} from '../port/repository/interfaceRepository.js'
import {IRequestAdminView} from '../port/userCase/interfaceUserCase.js'
import { NotFoundError} from '../../utils/erros/erros.js'
export class ByAdminViewUserCase{
    constructor(private byAdminViewUserRepository: IUserRepository) {}

    async execute({idUser}: IRequestAdminView): Promise<User[]> {
        if(idUser == null){
            throw new NotFoundError("Não conseguimos indetificar o seu usuario")
        }

        const idExists = await this.byAdminViewUserRepository.findById(idUser)

        if(!idExists){
            throw new NotFoundError("Não conseguimos indetificar o seu usuario")
        }

        if(idExists.admin){
            throw new NotFoundError("Você já é admin")
        }

        const usersAdm = await this.byAdminViewUserRepository.findAllAdmin()

        if (!usersAdm){
            throw new NotFoundError("Nenhum admin encontrado")
        }

        return usersAdm
    } 
}