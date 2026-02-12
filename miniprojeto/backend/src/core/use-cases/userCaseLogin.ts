import {IUserRepository} from '../port/interfaceRepository.js'
import {comparePassword} from '../../utils/security/encryptPassword.js'
import jwt from 'jsonwebtoken';
import {ILoginRequest} from '../port/interfaceUserCase.js'

export class LoginUserCase{
    constructor(private loginUserRepository: IUserRepository) {}

    async execute({user, password}:ILoginRequest): Promise<{ token: string }> {
        if(user == "" || password == ""){
            throw new Error("Preencha todos os campos")
        }

        const userExists = await this.loginUserRepository.findByUser(user)

        if(!userExists || !userExists.password){
            throw new Error("Nome de usuario não existe")
        }

        const passwordExists = await comparePassword(password, userExists.password)

        if(!passwordExists){
            throw new Error("Senha incorreta")
        }

        const token:string = jwt.sign(
            {idUser: userExists.id}, 
            process.env.JWT_SECRET || 'chave_mestra_temporaria_123', 
            { expiresIn: '1d' }
        );

        return {
            token:token
        }
    } 
}