import {ICreateRequest} from '../../../core/port/userCase/interfaceUserCase.js'
import { z } from 'zod';
import { NotFoundError} from '../../../utils/erros/erros.js'

const schema = z.object({
     user: z.string().min(1, "O Nome de usuário é obrigatório"),
     name: z.string().min(1, "O Nome completo é obrigatório"),
     email: z.string().min(1, "O Email do usuário é obrigatório"),
     password: z.string().optional(),
     idUser: z.number().optional(),
     admin: z.boolean().optional()
})
export class CreateUserDTO {
    public readonly user: string;
    public readonly name: string;
    public readonly email: string;
    public readonly password?: string;
    public readonly idUser?: number;
    public readonly admin?: boolean;
    
    constructor(data: ICreateRequest) {
        const result = schema.safeParse(data)
        if(!result.success) throw new NotFoundError(result.error.issues[0].message);

        this.user = result.data.user
        this.name = result.data.name
        this.email = result.data.email
        this.password = result.data.password
        this.idUser = result.data.idUser
        this.admin = result.data.admin

        Object.freeze(this);
    }
}