import {IUpdateRequest} from '../../../core/port/userCase/interfaceUserCase.js'
import { NotFoundError} from '../../../utils/erros/erros.js'
import { z } from 'zod';

const schema = z.object({
    idUser: z.number().min(1, 'O Id do usuario não foi encontrado'),
    id: z.number().min(1, "O Id do usuário é obrigatório"),
    user: z.string().min(1, "O Nome de usuário é obrigatório"),
    name: z.string().min(1, "O Nome do usuário é obrigatório"),
    email: z.string().min(1, "O Email do usuário é obrigatório"),
    password: z.string().optional(),
    admin: z.boolean().optional()
})

export class UpdateUserDTO {
    public readonly idUser: number;
    public readonly id: number;
    public readonly user: string;
    public readonly name: string;
    public readonly email: string;
    public readonly password?: string;
    public readonly admin?: boolean;

    constructor(data: IUpdateRequest) {
        const result = schema.safeParse(data)
        if(!result.success) throw new NotFoundError(result.error.issues[0].message);

        this.id = result.data.id;
        this.idUser = result.data.idUser;
        this.user = result.data.user;
        this.name = result.data.name;
        this.email = result.data.email;
        this.password = result.data.password;
        this.admin = result.data.admin;

        Object.freeze(this);
    }
}