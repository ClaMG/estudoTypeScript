import {IForgetPassword} from '../../../core/port/userCase/interfaceUserCase'
import { z } from 'zod';
import { NotFoundError} from '../../../utils/erros/erros.js'

const schema = z.object({
     user: z.string().min(1, "O Nome de usuário é obrigatório"),
     code: z.string().min(1, "O Código é obrigatório")
})

export class UpdatePasswordUserDTO {
    public readonly user: string;
    public readonly code: string;

    
    constructor(data: IForgetPassword) {
        const result = schema.safeParse(data)
        if(!result.success) throw new NotFoundError(result.error.issues[0].message);

        this.user = result.data.user
        this.code = result.data.code
       
        Object.freeze(this);
    }
}
