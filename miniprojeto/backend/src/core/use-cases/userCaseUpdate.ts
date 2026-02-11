import {User} from '../entities/entitiesUser.js'
import {IUserRepository} from '../port/interfaceRepository.js'
import {hashPassword} from '../../utils/security/encryptPassword.js'
export class UpdateUserCase{
    constructor(private updateUserRepository: IUserRepository) {}

    async execute(idUser: User["id"], id:User["id"], name: string, password: string, email: string, admin: boolean): Promise<void> {
        if(idUser == null ||id== null || name == "" || email == ""){
            throw new Error("Preencha todos os campos")
        }

        let adminStatus: boolean = false
        let passwordEnd: string = password
        
        const idExistsUpdated = await this.updateUserRepository.findById(idUser)

        if(!idExistsUpdated){
            throw new Error("Não conseguimos indetificar o seu usuario")
        }

        const idExists = await this.updateUserRepository.findById(id)

        if(!idExists || !idExists.password){
            throw new Error("Usuario para atualizar não existe")
        }

        if(!idExistsUpdated.admin){
            if(idUser != id){
                throw new Error("Você não pode alterar outros usuários")
            }
            if(password == ""){
                throw new Error("Sua senha é obrigatória para atualizar os dados")
            }
        }else{
            if (idUser != id){
                if(password != ""){
                    throw new Error("Você não pode alterar a senha de outros usuários")
                }else{
                    passwordEnd = idExists.password
                }
            }else{
                if(password == ""){
                    throw new Error("Sua senha é obrigatória para atualizar os dados")
                }
            }
            if(admin != undefined){
                adminStatus= admin
            }
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

        const encryptPassword: string = (await hashPassword(passwordEnd)).toString()

        const data: User = new User(name, encryptPassword, email, adminStatus, id);

        await this.updateUserRepository.update(data)
        
    } 
}