import {IByAllRequest} from '../../../core/port/interfaceUserCase.js'

export class ByAllUserDTO {
    public readonly idUser: number;
    
    constructor({ idUser}: IByAllRequest) {
        if (idUser === undefined || idUser === null) {
            throw new Error("O ID do usuário é obrigatório para a visualização.");
        }
        this.idUser = idUser;
        

        Object.freeze(this);
    }
}