import {ISendPassword} from '../../../core/port/userCase/interfaceUserCase'

export class UpdatePasswordUserDTO {
    public readonly user: string;
    public readonly name: string;
    
    
    constructor({name, user}: ISendPassword) {
        this.user = user
        this.name = name
       
        Object.freeze(this);
    }
}