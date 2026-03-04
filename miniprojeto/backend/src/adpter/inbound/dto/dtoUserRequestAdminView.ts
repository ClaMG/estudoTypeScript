import {IRequestAdminView} from '../../../core/port/userCase/interfaceUserCase'
import { NotFoundError} from '../../../utils/erros/erros.js'

export class RequestAdminViewUserDTO {
    public readonly idUser: number;
    
    constructor({idUser }: IRequestAdminView) {
        if (idUser === undefined) {
            throw new NotFoundError("Não conseguimos indetificar o seu usuario")
        }
        this.idUser = idUser

        Object.freeze(this);
    }
}