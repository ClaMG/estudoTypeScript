import {User} from '../entities/entitiesUser.js'
import {IUserRepository} from '../port/interfaceRepository.js'
import {hashPassword} from '../../utils/security/encryptPassword.js'
import {generateRandomPassword} from '../../utils/security/randomPassword.js'

export class CreateUserCase{
    constructor(private saveUserRepository: IUserRepository) {}

    async execute(idUser: User["id"], name: string, password: string, email: string, admin: boolean): Promise<void> {
        if(name == "" || email == ""){
            throw new Error("Preencha todos os campos")
        }

        let adminStatus: boolean = false
        let sendEmail: boolean = false
        let passwordEnd: string = password
        
        if(idUser != null){
            const idExists = await this.saveUserRepository.findById(idUser)

            if(!idExists){
                throw new Error("Não conseguimos indetificar o seu usuario")
            }

            if(idExists.admin){
                passwordEnd = generateRandomPassword(8)
                sendEmail= true
                if(admin != undefined){
                    adminStatus= admin
                }
            }
        }

        if(password == ""){
            throw new Error("Preencha todos os campos")
        }

        const userExists = await this.saveUserRepository.findByName(name)

        if(userExists){
            throw new Error("Nome de usuario já existe")
        }

        const emailExists = await this.saveUserRepository.findByEmail(email)
        if(emailExists){
            throw new Error("Email já esta sendo utilizado")
        }

        const encryptPassword: string = (await hashPassword(passwordEnd)).toString()

        const data: User = new User(name, encryptPassword, email, adminStatus);

        if(sendEmail){
            //enviar email com a senha nova do adm einformar que é bom atualizar
        }


        await this.saveUserRepository.save(data)
        
    } 
}