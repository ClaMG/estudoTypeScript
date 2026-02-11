import {IByIdRequest} from '../../../core/port/interfaceUserCase.js'

export class ByIdUserDTO {
    public readonly idUser: number;
    

    constructor({ idUser}: IByIdRequest) {
        if (idUser === undefined) {
            throw new Error("O ID do usuário é obrigatório para a exclusão.");
        }
        this.idUser = idUser;
        

        Object.freeze(this);
    }
}