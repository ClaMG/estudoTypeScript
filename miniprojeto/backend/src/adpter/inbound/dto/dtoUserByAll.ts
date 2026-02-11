import {IByAllRequest} from '../../../core/port/interfaceUserCase.js'

export class ByAllUserDTO {
    public readonly idUser: number;
    

    constructor({ idUser}: IByAllRequest) {
        if (idUser === undefined) {
            throw new Error("O ID do usuário é obrigatório para a exclusão.");
        }
        this.idUser = idUser;
        

        Object.freeze(this);
    }
}