import {ISendPassword} from '../../../core/port/userCase/interfaceUserCase'
import { z } from 'zod';
import { NotFoundError} from '../../../utils/erros/erros.js'

const schema = z.object({
    user: z.string().min(1, "O Nome de usuário é obrigatório"),
    name: z.string().min(1, "O Nome completo é obrigatório"),
})

export class SendCodeUserDTO {
    public readonly user: string;
    public readonly name: string;
    
    
    constructor(data: ISendPassword) {
        const result = schema.safeParse(data)
        if(!result.success) throw new NotFoundError(result.error.issues[0].message);

        this.user = result.data.user
        this.name = result.data.name
       
        Object.freeze(this);
    }
}