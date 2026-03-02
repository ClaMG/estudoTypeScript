import {IDeleteRequest} from '../../../core/port/userCase/interfaceUserCase.js'

export class DeleteUserDTO {
    public readonly idUser: number
    public readonly user: string

    constructor({ idUser, user }: IDeleteRequest) {
        if (idUser === undefined) {
            throw new Error("O ID do usuário é obrigatório para a exclusão.");
        }
        this.idUser = idUser
        this.user = user

        Object.freeze(this);
    } 
}