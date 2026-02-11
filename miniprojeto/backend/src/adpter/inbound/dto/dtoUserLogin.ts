import {ILoginRequest} from '../../../core/port/interfaceUserCase.js'

export class LoginUserDTO {
    public readonly name: string;
    public readonly password: string;
    
    constructor({ name, password }: ILoginRequest) {
        if (password === undefined) {
            throw new Error("A senha do usuário é obrigatório para a atualização.");
        }
        this.name = name;
        this.password = password;

        Object.freeze(this);
    }
}