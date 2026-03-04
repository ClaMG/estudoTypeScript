import {IRequestAdmin} from '../../../core/port/userCase/interfaceUserCase'
import { NotFoundError} from '../../../utils/erros/erros.js'

export class RequestAdminUserDTO {
    public readonly user: string;
    public readonly idUser: number;
    
    constructor({idUser, user }: IRequestAdmin) {
        if (idUser === undefined) {
            throw new NotFoundError("Não conseguimos indetificar o seu usuario")
        }
        this.idUser = idUser
        this.user = user
       
        Object.freeze(this);
    }
}