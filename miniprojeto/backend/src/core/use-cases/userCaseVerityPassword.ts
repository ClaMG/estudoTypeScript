import {IUserRepository} from '../port/repository/interfaceRepository.js'
import {IForgetPassword} from '../port/userCase/interfaceUserCase.js'
import { NotFoundError} from '../../utils/erros/erros.js'
import {ICodeRepository} from '../port/repository/intefaceRepsitoryCode'
import MailProvider from '../../utils/to_send/toSendEmail.js'
import {generateRandomPassword} from '../../utils/security/randomPassword.js'
import {User} from '../entities/entitiesUser.js'
export class VeryPasswordUserCase{
    constructor(private viryPasswordRepository: ICodeRepository, private sendCodeUserRepository: IUserRepository) {}

    async execute({user, code}: IForgetPassword): Promise<void> {
        if(code == null ){
            throw new NotFoundError("Preencha todos os campos")
        }

        if(user == null){
            throw new NotFoundError("Não conseguimos localizar o usuário que vai ser alterado")
        }

        const userExist = await this.sendCodeUserRepository.findByUser(user)

        if(!userExist || !userExist.id){
            throw new NotFoundError("Usuarário não conhecido")
        }

        const codeExist = await this.viryPasswordRepository.findByUserCode(userExist.id)
        
        if(!codeExist){
            throw new NotFoundError("Não conseguimos localizar o codigos para esse usuário")
        }

        if(code != codeExist.code){
            throw new NotFoundError("Codigo Incorreto")
        }

        const passwordTemp = generateRandomPassword(8)

         const data: User = new User(userExist.user, userExist.name, userExist.email, passwordTemp, userExist.admin, userExist.id);
        
        await this.sendCodeUserRepository.update(data)

        const emailSend = await MailProvider.sendTemporaryPasswordEmail(userExist.email, userExist.name, passwordTemp)
        
        if(!emailSend){
            throw new NotFoundError("Não conseguimos encaminhar o email com a senha nova")
        }
    } 
}