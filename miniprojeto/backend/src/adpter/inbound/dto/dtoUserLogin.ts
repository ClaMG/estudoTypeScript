import {ILoginRequest} from '../../../core/port/userCase/interfaceUserCase.js'
import { NotFoundError} from '../../../utils/erros/erros.js'
import { z } from 'zod';

const schema = z.object({
    user: z.string().min(1, "O Nome de usuário é obrigatório"),
    password: z.string().min(1, "A Senha é obrigatório")
})

export class LoginUserDTO {
    public readonly user: string;
    public readonly password: string;
    
    constructor(data: ILoginRequest) {
        const result = schema.safeParse(data)

        if (!result.success) throw new NotFoundError(result.error.issues[0].message);

        this.user = result.data.user;
        this.password = result.data.password;

        Object.freeze(this);
    }
}