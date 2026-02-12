import {User} from '../entities/entitiesUser.js'
import {IUserRepository} from '../port/interfaceRepository.js'
import {hashPassword} from '../../utils/security/encryptPassword.js'
import {IUpdateRequest} from '../port/interfaceUserCase.js'
import {validateEmail} from '../../utils/validators/validateEmail.js'
export class UpdateUserCase{
    constructor(private updateUserRepository: IUserRepository) {}

    async execute({idUser, id, user, name, email, password, admin}:IUpdateRequest): Promise<void> {
        if(idUser == null ||id== null || user=="" || name == "" || email == ""){
            throw new Error("Preencha todos os campos")
        }


        let adminStatus: boolean = false
        let passwordEnd: string = password || ""
        
        //Usuario que esta editando
        const idExistsUpdated = await this.updateUserRepository.findById(idUser)

        //Existe?
        if(!idExistsUpdated){
            throw new Error("Não conseguimos indetificar o seu usuario")
        }

        //Usuario que vai ser editado
        const idExists = await this.updateUserRepository.findById(id)

        //Existe?
        if(!idExists || !idExists.password){
            throw new Error("Usuario para atualizar não existe")
        }

        if(!idExistsUpdated.admin){
            //Comum
            if(idUser != id){//user diferente 
                throw new Error("Você não pode alterar outros usuários")
            }
            if(password == "" || passwordEnd == ""){//password vazia
                throw new Error("Sua senha é obrigatória para atualizar os dados")
            }
            if(admin != undefined){//se informar o adm
                throw new Error("Você não é admin, não pode alterar o status de adiministrador")
            }
        }else{
            //Adm
            if (idUser != id && passwordEnd != "" ){//user diferente
                throw new Error("Você não pode alterar a senha de outros usuários dessa forma")
            }
            if(idUser == id){//si mesmo
                if(password == "" || passwordEnd == ""){//password vazia
                    throw new Error("Sua senha é obrigatória para atualizar os dados")
                }
            }
            if(admin != undefined){//se informar o adm
                adminStatus= admin
            }
        }
        
        if(user != idExists.user){
            const userExists = await this.updateUserRepository.findByUser(user)
            if(userExists && userExists.id != id){
                throw new Error("Nome de usuário já está em uso.")
            }
            
        }

        const emailValidate = validateEmail(email)
        
        if(!emailValidate){
            throw new Error("Formato incorreto do email, adicione @ e .com")
        }

        if(email != idExists.email){
            const emailExists = await this.updateUserRepository.findByEmail(email)
            if(emailExists && emailExists.id != id){
                throw new Error("Email já está em uso")
            }

        }

        const encryptPassword: string = (await hashPassword(passwordEnd)).toString()

        const data: User = new User(user, name, email, encryptPassword, adminStatus, id);

        await this.updateUserRepository.update(data)
        
    } 
}