import {IUpdateRequest} from '../../../core/port/userCase/interfaceUserCase.js'

export class UpdateUserDTO {
    public readonly idUser: number;
    public readonly id: number;
    public readonly user: string;
    public readonly name: string;
    public readonly email: string;
    public readonly password?: string;
    public readonly admin?: boolean;

    constructor({ idUser, id, user, name, email, password, admin }: IUpdateRequest) {
        if (idUser === undefined) {
            throw new Error("O seu ID de usuário é obrigatório para a atualização.");
        }
        if (id === undefined) {
            throw new Error("O ID do usuário é obrigatório para a atualização.");
        }
        this.id = id;
        this.idUser = idUser;
        this.user = user;
        this.name = name;
        this.email = email;
        this.password = password;
        this.admin = admin;

        Object.freeze(this);
    }
}