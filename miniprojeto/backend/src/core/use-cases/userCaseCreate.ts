import {User} from '../entities/entitiesUser.js'
import {IUserRepository} from '../port/interfaceRepository.js'
import {hashPassword} from '../../utils/security/encryptPassword.js'

export class CreateUserCase{
    constructor(private saveUserRepository: IUserRepository) {}

    async execute(idUser: User["id"], name: string, password: string, email: string, admin: boolean): Promise<void> {
        if(name == "" || password == "" || email == ""){
            throw new Error("Preencha todos os campos")
        }

        let adminStatus: boolean = false
        

        if(idUser != 0 || idUser != null){
            const idExists = await this.saveUserRepository.findById(idUser)

            if(!idExists){
                throw new Error("Não conseguimos indetificar o seu usuario")
            }

            if(admin != null){
                adminStatus= admin
            }

        }

        const userExists = await this.saveUserRepository.findByName(name)

        if(userExists){
            throw new Error("Nome de usuario já existe")
        }

        const emailExists = await this.saveUserRepository.findByEmail(email)
        if(emailExists){
            throw new Error("Email já esta sendo utilizado")
        }

        const encryptPassword: string = (await hashPassword(password)).toString()

        const data: User = new User(name, encryptPassword, email, adminStatus);

        await this.saveUserRepository.save(data)
        
    } 
}