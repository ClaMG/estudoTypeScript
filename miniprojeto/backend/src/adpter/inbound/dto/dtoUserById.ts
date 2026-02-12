import {IByIdRequest} from '../../../core/port/interfaceUserCase.js'

export class ByIdUserDTO {
    public readonly idUser: number;
    public readonly name: string;
    

    constructor({ idUser, name}: IByIdRequest) {
        if (idUser === undefined) {
            throw new Error("O ID do usuário é obrigatório para a exclusão.");
        }
        this.idUser = idUser;
        this.name = name;
        

        Object.freeze(this);
    }
}