import {User} from '../entities/entitiesUser.js'
import {IUserRepository} from '../port/interfaceRepository.js'
import {hashPassword} from '../../utils/security/encryptPassword.js'
import {generateRandomPassword} from '../../utils/security/randomPassword.js'
import { ICreateRequest } from '../port/interfaceUserCase.js'
import MailProvider from '../../utils/to_send/toSendEmail.js'
import {validateEmail} from '../../utils/validators/validateEmail.js'
export class CreateUserCase{
    constructor(private saveUserRepository: IUserRepository) {}
    async execute({idUser, name, email, password, admin}: ICreateRequest): Promise<void> {
        if(name == "" || email == ""){
            throw new Error("Preencha todos os campos")
        }

        let adminStatus: boolean = false
        let sendEmailStatus: boolean = false
        let passwordEnd: string = password || ""
        
        if(idUser != null){//mandou o id
            const idExists = await this.saveUserRepository.findById(idUser)

            if(!idExists){
                throw new Error("Não conseguimos indetificar o seu usuario")
            }

            //se for adm
            if(idExists.admin){
                passwordEnd = generateRandomPassword(8)
                sendEmailStatus= true
                if(admin != undefined){//colocar status de adm
                    adminStatus= admin
                }
            }
        }

        if(passwordEnd == ""){//se for user comum e não mandou a senha
            throw new Error("Preencha todos os campos")
        }

        const userExists = await this.saveUserRepository.findByName(name)

        if(userExists){
            throw new Error("Nome de usuario já existe")
        }

        const emailValidate = validateEmail(email)

        if(!emailValidate){
            throw new Error("Formato incorreto do email, adicione @ e .com")
        }

        const emailExists = await this.saveUserRepository.findByEmail(email)
        if(emailExists){
            throw new Error("Email já esta sendo utilizado")
        }

        const encryptPassword: string = (await hashPassword(passwordEnd)).toString()

        const data: User = new User(name, email, encryptPassword, adminStatus);

        if(sendEmailStatus){
           const sendEmailtest = await MailProvider.sendEmail(email, name, passwordEnd)

           if(!sendEmailtest){
                throw new Error("Não foi possivel enviar o email com sua senha")
           }
        }


        await this.saveUserRepository.save(data)
        
    } 
}