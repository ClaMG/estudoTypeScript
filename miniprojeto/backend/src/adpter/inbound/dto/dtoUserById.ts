import {IByIdRequest} from '../../../core/port/userCase/interfaceUserCase.js'
import { NotFoundError} from '../../../utils/erros/erros.js'
import { z } from 'zod';

const schema = z.object({
    idUser: z.number().min(1, 'O Id do usuario não foi encontrado'),
    user: z.string()
})

export class ByIdUserDTO {
    public readonly idUser: number;
    public readonly user?: string;
    

    constructor(data: IByIdRequest) {
        const result = schema.safeParse(data) 

        if(!result.success) throw new NotFoundError(result.error.issues[0].message);

        this.idUser = result.data.idUser;
        this.user = result.data?.user;
        

        Object.freeze(this);
    }
}