import {IUserRepository} from '../port/interfaceRepository.js'
import {comparePassword} from '../../utils/security/encryptPassword.js'
import jwt from 'jsonwebtoken';

export class LoginUserCase{
    constructor(private loginUserRepository: IUserRepository) {}

    async execute(name: string, password: string): Promise<{ token: string }> {
        if(name == "" || password == ""){
            throw new Error("Preencha todos os campos")
        }

        const userExists = await this.loginUserRepository.findByName(name)

        if(!userExists || !userExists.password){
            throw new Error("Nome de usuario não existe")
        }

        const passwordExists = await comparePassword(password, userExists.password)

        if(!passwordExists){
            throw new Error("Senha incorreta")
        }

        const token:string = jwt.sign(
            {id: userExists.id}, 
            process.env.JWT_SECRET || 'chave_mestra_temporaria_123', 
            { expiresIn: '1d' }
        );

        return {
            token:token
        }
    } 
}