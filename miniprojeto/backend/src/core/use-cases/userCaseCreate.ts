import {User} from '../entities/entitiesUser.js'
import {IUserRepository} from '../port/repository/interfaceRepository.js'
import { ICreateRequest } from '../port/userCase/interfaceUserCase.js'
import {hashPassword} from '../../utils/security/encryptPassword.js'
import {validateEmail} from '../../utils/validators/validateEmail.js'
import { NotFoundError} from '../../utils/erros/erros.js'
import {generateRandomPassword} from '../../utils/security/randomPassword.js'
import MailProvider from '../../utils/to_send/toSendEmail.js'
export class CreateUserCase{
    constructor(private saveUserRepository: IUserRepository) {}
    async execute({user, name, email, password, idUser, admin}: ICreateRequest) {
        if(user == "" || name == "" || email == "" ){
            throw new NotFoundError("Preencha todos os campos")
        }

        var passwordEnd: string = password || ""
        var adminEnd: boolean = admin || false
        var senEmail: boolean = false
        var userCreateAdm: string = ""

        if(idUser != null || idUser != undefined){//se tiver o id
             const IdExists = await this.saveUserRepository.findById(idUser)

            if(!IdExists){
                throw new NotFoundError("Não conseguimos localizar seu usuário")
            }

            if(!IdExists.admin){
                throw new NotFoundError("Você não é administrador, não pode adicionar usuários enquanto estiver logado")
            }

            if(passwordEnd != "" || password != null){
                throw new NotFoundError("Você não pode escolher a senha do usuário")
            }else{
                passwordEnd = generateRandomPassword(6)
                userCreateAdm = IdExists.user
                senEmail = true
            }

        }else{
            if(password == ""){
                throw new NotFoundError("Preencha todos os campos")
            }
        } 

        const userExists = await this.saveUserRepository.findByUser(user)

        if(userExists){
            throw new NotFoundError("Nome de usuario já existe")
        }

        const emailValidate = validateEmail(email)

        if(!emailValidate){
            throw new NotFoundError("Formato incorreto do email, adicione @ e .com")
        }

        const emailExists = await this.saveUserRepository.findByEmail(email)
        if(emailExists){
            throw new NotFoundError("Email já esta sendo utilizado")
        }

        const encryptPassword: string = (await hashPassword(passwordEnd)).toString()

        if(senEmail){
            const emailSend = await MailProvider.sendEmailUpdate(email, name, user, passwordEnd, userCreateAdm)

            if(!emailSend){
                throw new NotFoundError("Não conseguimos encaminhar o email com a senha nova")
            }
        }

        const data: User = new User(user, name, email, encryptPassword, adminEnd);

        const create = await this.saveUserRepository.save(data)

        return create
        
    } 
}