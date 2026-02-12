import {User} from '../entities/entitiesUser.js'
import {IUserRepository} from '../port/interfaceRepository.js'
import {hashPassword} from '../../utils/security/encryptPassword.js'
import { ICreateRequest } from '../port/interfaceUserCase.js'
import {validateEmail} from '../../utils/validators/validateEmail.js'
export class CreateUserCase{
    constructor(private saveUserRepository: IUserRepository) {}
    async execute({user, name, email, password}: ICreateRequest): Promise<void> {
        if(user == "" || name == "" || email == "" || password == ""){
            throw new Error("Preencha todos os campos")
        }

        const userExists = await this.saveUserRepository.findByUser(user)

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

        const encryptPassword: string = (await hashPassword(password)).toString()

        const data: User = new User(user, name, email, encryptPassword);

        await this.saveUserRepository.save(data)
        
    } 
}