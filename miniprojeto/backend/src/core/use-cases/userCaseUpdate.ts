import {User} from '../entities/entitiesUser.js'
import {IUserRepository} from '../port/interfaceRepository.js'
import {hashPassword} from '../../utils/security/encryptPassword.js'
import {IUpdateRequest} from '../port/interfaceUserCase.js'
import {validateEmail} from '../../utils/validators/validateEmail.js'
import {generateRandomPassword} from '../../utils/security/randomPassword.js'
import MailProvider from '../../utils/to_send/toSendEmail.js'
import { NotFoundError} from '../../utils/erros/erros.js'

export class UpdateUserCase{
    constructor(private updateUserRepository: IUserRepository) {}

    async execute({idUser, id, user, name, email, password, admin}:IUpdateRequest): Promise<void> {
        if(idUser == null ||id== null || user=="" || name == "" || email == ""){
            throw new NotFoundError("Preencha todos os campos")
        }

        let adminStatus: boolean = false
        let passwordEnd: string = password || ""
        let emailSendStatus: boolean = false
        
        //Usuario que esta editando
        const idExistsUpdated = await this.updateUserRepository.findById(idUser)

        //Existe?
        if(!idExistsUpdated){
            throw new NotFoundError("Não conseguimos indetificar o seu usuario")
        }

        //Usuario que vai ser editado
        const idExists = await this.updateUserRepository.findById(id)

        //Existe?
        if(!idExists || !idExists.password){
            throw new NotFoundError("Usuario para atualizar não existe")
        }

        if(!idExistsUpdated.admin){
            //Comum
            if(idUser != id){//user diferente 
                throw new NotFoundError("Você não pode alterar outros usuários")
            }
            if(password == "" || passwordEnd == ""){//password vazia
                passwordEnd = generateRandomPassword(8)
                emailSendStatus = true
            }
            if(admin != undefined){//se informar o adm
                throw new NotFoundError("Você não é admin, não pode alterar o status de adiministrador")
            }
        }else{
            //Adm 
            if (idUser != id && passwordEnd != "" ){//user diferente
                if(passwordEnd != ""){
                    throw new NotFoundError("Você não pode alterar a senha de outros usuários dessa forma")
                }else{
                    passwordEnd = generateRandomPassword(8)
                    emailSendStatus = true
                }
            }
            if(idUser == id){//si mesmo
                if(password == "" || passwordEnd == ""){//password vazia
                    throw new NotFoundError("Sua senha é obrigatória para atualizar os dados")
                }
            }
            if(admin != undefined){//se informar o status adm
                adminStatus= admin
            }
        }
        
        if(user != idExists.user){//Verifica se o usuario já esta sendo usado
            const userExists = await this.updateUserRepository.findByUser(user)
            if(userExists && userExists.id != id){
                throw new NotFoundError("Nome de usuário já está em uso.")
            }
        }

        const emailValidate = validateEmail(email)
        
        if(!emailValidate){
            throw new NotFoundError("Formato incorreto do email, adicione @ e .com")
        }

        if(email != idExists.email){//Verifica se o email já esta sendo usado
            const emailExists = await this.updateUserRepository.findByEmail(email)
            if(emailExists && emailExists.id != id){
                throw new NotFoundError("Email já está em uso")
            }
        }

        const encryptPassword: string = (await hashPassword(passwordEnd)).toString()

        if(emailSendStatus){
            const emailSend = await MailProvider.sendEmail(idExists.email, name, user, passwordEnd, idExistsUpdated.user)

            if(!emailSend){
                throw new NotFoundError("Não conseguimos encaminhar o email com a senha nova")
            }
        }

        const data: User = new User(user, name, email, encryptPassword, adminStatus, id);

        await this.updateUserRepository.update(data)
        
    } 
}