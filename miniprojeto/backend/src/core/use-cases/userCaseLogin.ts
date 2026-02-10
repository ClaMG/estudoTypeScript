import {User} from '../entities/entitiesUser.js'
import {IUserRepository} from '../port/interfaceRepository.js'
import {comparePassword} from '../../utils/security/encryptPassword.js'

export class CreateUserCase{
    constructor(private saveUserRepository: IUserRepository) {}

    async execute(name: string, password: string): Promise<void> {
        if(name == "" || password == ""){
            throw new Error("Preencha todos os campos")
        }

        const userExists = await this.saveUserRepository.findByName(name)

        if(!userExists){
            throw new Error("Nome de usuario não existe")
        }

      

        
        
    } 
}