import {IUserRepository} from '../port/repository/interfaceRepository.js'
import {IRequestAdmin} from '../port/userCase/interfaceUserCase.js'
import { NotFoundError} from '../../utils/erros/erros.js'
import MailProvider from '../../utils/to_send/toSendEmail.js'
export class ByAdminUserCase{
    constructor(private byAdminUserRepository: IUserRepository) {}

    async execute({idUser, user}: IRequestAdmin): Promise<void> {
        if(idUser == null ){
            throw new NotFoundError("Não conseguimos indetificar o seu usuario")
        }

        const idExists = await this.byAdminUserRepository.findById(idUser)

        if(!idExists){
            throw new NotFoundError("Não conseguimos encontrar o seu usuario")
        }

        if(idExists.admin){
            throw new NotFoundError("Você já é admin")
        }

        if(user == ""){
             throw new NotFoundError("Indique qual admin você pretende pedir acesso")
        }
          
        const usersAdm = await this.byAdminUserRepository.findByUser(user)

        if (!usersAdm || !usersAdm.admin){
            throw new NotFoundError("Nenhum admin encontrado")
        }

        const emailSend = await MailProvider.sendEmailAdm(usersAdm.email, usersAdm.user, idExists.user, idExists.email)

        if(!emailSend){
            throw new NotFoundError("Erro ao enviar um email ao admin")
        }

    } 
}