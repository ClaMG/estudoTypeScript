import {IRequestAdmin} from '../../../core/port/userCase/interfaceUserCase'
import { NotFoundError} from '../../../utils/erros/erros.js'
import { z } from 'zod';

const schema = z.object({
    user: z.string().min(1, "O Nome de usuário é obrigatório"),
    idUser: z.number().min(1, 'O Id do usuario não foi encontrado')
})

export class RequestAdminUserDTO {
    public readonly user: string;
    public readonly idUser: number;
    
    constructor(data: IRequestAdmin) {
        const result = schema.safeParse(data)
        if(!result.success) throw new NotFoundError(result.error.issues[0].message);

        this.idUser = result.data.idUser
        this.user = result.data.user
       
        Object.freeze(this);
    }
}