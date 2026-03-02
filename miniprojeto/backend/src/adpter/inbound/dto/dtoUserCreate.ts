import {ICreateRequest} from '../../../core/port/userCase/interfaceUserCase.js'

export class CreateUserDTO {
    public readonly user: string;
    public readonly name: string;
    public readonly email: string;
    public readonly password?: string;
    public readonly idUser?: number;
    public readonly admin?: boolean;
    
    constructor({idUser, user, name, email, password, admin }: ICreateRequest) {
        this.user = user
        this.name = name
        this.email = email
        this.password = password
        this.idUser = idUser
        this.admin = admin

        Object.freeze(this);
    }
}