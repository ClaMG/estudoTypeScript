import {ICreateRequest} from '../../../core/port/interfaceUserCase.js'

export class CreateUserDTO {
    public readonly user: string;
    public readonly name: string;
    public readonly email: string;
    public readonly password: string;
    
    constructor({user, name, email, password }: ICreateRequest) {
        this.user = user
        this.name = name
        this.email = email
        this.password = password

        Object.freeze(this);
    }
}