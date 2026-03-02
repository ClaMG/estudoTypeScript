import {User} from '../entities/entitiesUser.js'
import {IUserRepository} from '../port/repository/interfaceRepository.js'
import {IRequestAdminView} from '../port/userCase/interfaceUserCase.js'
import { NotFoundError} from '../../utils/erros/erros.js'
export class ByAdminViewUserCase{
    constructor(private byAllUserRepository: IUserRepository) {}

    async execute({idUser}: IRequestAdminView): Promise<User[]> {
        if(idUser == null){
            throw new NotFoundError("Não conseguimos indetificar o seu usuario")
        }

        const idExists = await this.byAllUserRepository.findById(idUser)

        if(!idExists){
            throw new NotFoundError("Não conseguimos indetificar o seu usuario")
        }
          

        const usersAdm = await this.byAllUserRepository.findByAdmin()

        if (!usersAdm){
            throw new NotFoundError("Nenhum admin encontrado")
        }

        return usersAdm
    } 
}