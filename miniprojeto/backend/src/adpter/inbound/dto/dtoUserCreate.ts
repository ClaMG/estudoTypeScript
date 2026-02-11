import {ICreateRequest} from '../../../core/port/interfaceUserCase.js'

export class CreateUserDTO {
    public readonly idUser?: number;
    public readonly name: string;
    public readonly email: string;
    public readonly password?: string;
    public readonly admin?: boolean;

    constructor({ idUser, name, email, password, admin }: ICreateRequest) {
        this.idUser = idUser;
        this.name = name;
        this.email = email;
        this.password = password;
        this.admin = admin;

        Object.freeze(this);
    }
}