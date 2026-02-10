import {User} from '../entities/entitiesUser.js'
import {IUserRepository} from '../port/interfaceRepository.js'
import {hashPassword} from '../../utils/security/encryptPassword.js'

export class UpdateUserCase{
    constructor(private updateUserRepository: IUserRepository) {}

    async execute(idUser: User["id"], id:User["id"], name: string, password: string, email: string, admin: boolean): Promise<void> {
        if(id== null || name == "" || password == "" || email == ""){
            throw new Error("Preencha todos os campos")
        }


        let adminStatus: boolean = false
        
        const idExistsUpdated = await this.updateUserRepository.findById(idUser)

        if(!idExistsUpdated){
            throw new Error("Não conseguimos indetificar o seu usuario")
        }

        if(!idExistsUpdated.admin && idExistsUpdated.id != id){
            throw new Error("Você não pode alterar outros usuários");
        }

        if(idUser != 0 || idUser != null && admin != null){
            adminStatus= admin

        }

        const idExists = await this.updateUserRepository.findById(id)

        if(!idExists){
            throw new Error("Usuario para atualizar não existe")
        }

        
        if(name != idExists.name){
            const userExists = await this.updateUserRepository.findByName(name)
            if(userExists && userExists.id != id){
                throw new Error("Nome de usuário já está em uso.")
            }
            
        }

        if(email != idExists.email){
            const emailExists = await this.updateUserRepository.findByEmail(email)
            if(emailExists && emailExists.id != id){
                throw new Error("Email já está em uso")
            }

        }

        const encryptPassword: string = (await hashPassword(password)).toString()

        const data: User = new User(name, encryptPassword, email, adminStatus, id);

        await this.updateUserRepository.update(data)
        
    } 
}