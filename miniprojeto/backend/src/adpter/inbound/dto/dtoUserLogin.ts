import {ILoginRequest} from '../../../core/port/userCase/interfaceUserCase.js'

export class LoginUserDTO {
    public readonly user: string;
    public readonly password: string;
    
    constructor({ user, password }: ILoginRequest) {
        if (password === undefined) {
            throw new Error("A senha do usuário é obrigatório para a atualização.");
        }
        this.user = user;
        this.password = password;

        Object.freeze(this);
    }
}