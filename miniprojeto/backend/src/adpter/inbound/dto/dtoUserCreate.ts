import {ICreateRequest} from '../../../core/port/interfaceUserCase.js'

export class CreateUserDTO {
    public readonly name: string;
    public readonly email: string;
    public readonly password: string;
    
    constructor({name, email, password }: ICreateRequest) {
        this.name = name
        this.email = email
        this.password = password

        Object.freeze(this);
    }
}