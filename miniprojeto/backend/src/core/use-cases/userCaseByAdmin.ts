import {User} from '../entities/entitiesUser.js'
import {IUserRepository} from '../port/repository/interfaceRepository.js'
import {IRequestAdmin} from '../port/userCase/interfaceUserCase.js'
import { NotFoundError} from '../../utils/erros/erros.js'
import MailProvider from '../../utils/to_send/toSendEmail.js'
export class ByAdminUserCase{
    constructor(private byAllUserRepository: IUserRepository) {}

    async execute({idUser, user}: IRequestAdmin): Promise<void> {
        if(idUser == null ){
            throw new NotFoundError("Não conseguimos indetificar o seu usuario")
        }

        const idExists = await this.byAllUserRepository.findById(idUser)

        if(!idExists){
            throw new NotFoundError("Não conseguimos indetificar o seu usuario")
        }

        if(user == ""){
             throw new NotFoundError("Indique qual admin você pretende pedir acesso")
        }
          
        const usersAdm = await this.byAllUserRepository.findByAdmin()

        if (!usersAdm){
            throw new NotFoundError("Nenhum admin encontrado")
        }


        const emailSend = await MailProvider.sendEmailAdm("", "")

        if(emailSend == null){
            throw new NotFoundError("")
        }

    } 
}