import {IByAllRequest} from '../../../core/port/userCase/interfaceUserCase.js'
import { NotFoundError} from '../../../utils/erros/erros.js'

export class ByAllUserDTO {
    public readonly idUser: number;
    
    constructor({ idUser}: IByAllRequest) {
        if (idUser === undefined || idUser === null) {
            throw new NotFoundError("Não conseguimos indetificar o seu usuario")
        }
        this.idUser = idUser;
        

        Object.freeze(this);
    }
}