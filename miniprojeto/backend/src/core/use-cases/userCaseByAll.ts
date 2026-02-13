import {User} from '../entities/entitiesUser.js'
import {IUserRepository} from '../port/interfaceRepository.js'
import {IByAllRequest} from '../port/interfaceUserCase.js'
import { NotFoundError} from '../../utils/erros/erros.js'
export class ByAllUserCase{
    constructor(private byAllUserRepository: IUserRepository) {}

    async execute({idUser}: IByAllRequest): Promise<User[]> {
        if(idUser == null){
            throw new NotFoundError("Não conseguimos indetificar o seu usuario")
        }

        const idExists = await this.byAllUserRepository.findById(idUser)

        if(!idExists){
            throw new NotFoundError("Não conseguimos indetificar o seu usuario")
        }

        if(!idExists.admin){
            throw new NotFoundError("Você não é admin, não pode visualizar outros usuarios")
        }
          

        const usersAll = await this.byAllUserRepository.seeAll()

        

        return usersAll
    } 
}