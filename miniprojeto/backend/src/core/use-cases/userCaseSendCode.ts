import {ICodeRepository} from '../port/repository/intefaceRepsitoryCode'
import {IUserRepository} from '../port/repository/interfaceRepository'
import {ISendPassword} from '../port/userCase/interfaceUserCase.js'
import { NotFoundError} from '../../utils/erros/erros.js'
import MailProvider from '../../utils/to_send/toSendEmail.js'
import {generateRandomPassword} from '../../utils/security/randomPassword.js'
import {Code} from '../entities/entitiesCode'
export class SendCodeUserCase{
    constructor(private sendCodeUserRepository: IUserRepository, private sendCodeRepository: ICodeRepository) {}

    async execute({user, name}: ISendPassword): Promise<void> {
        if(user == null || name == null){
            throw new NotFoundError("Preencha todos os campos")
        }

        const userExist = await this.sendCodeUserRepository.findByUser(user)

        if(!userExist || !userExist.id){
            throw new NotFoundError("Usuarário não conhecido")
        }

        if(userExist.name != name){
            throw new NotFoundError("Usuarário não tem esse nome")
        }

        const code: string = generateRandomPassword(4)

        const codeExist = await this.sendCodeRepository.findByUserCode(userExist.id)
        
        if(codeExist){
            await this.sendCodeRepository.delete(codeExist.id)
        }

        const data: Code = new Code(userExist.id, code );

        await this.sendCodeRepository.saveCode(data);

        const emailSend = await MailProvider.sendForgotPasswordEmail(userExist.email, name, code)

        if(!emailSend){
            throw new NotFoundError("Erro ao enviar um email ao admin")
        }

    } 
}