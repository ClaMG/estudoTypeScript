import {ILoginRequest} from '../../../core/port/userCase/interfaceUserCase.js'
import { NotFoundError} from '../../../utils/erros/erros.js'

export class LoginUserDTO {
    public readonly user: string;
    public readonly password: string;
    
    constructor({ user, password }: ILoginRequest) {
        if (password === undefined) {
            throw new NotFoundError("Não conseguimos indetificar o seu usuario")
        }
        this.user = user;
        this.password = password;

        Object.freeze(this);
    }
}