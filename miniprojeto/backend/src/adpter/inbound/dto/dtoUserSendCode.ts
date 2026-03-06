import {ISendPassword} from '../../../core/port/userCase/interfaceUserCase'

export class SendCodeUserDTO {
    public readonly user: string;
    public readonly name: string;
    
    
    constructor({name, user }: ISendPassword) {
        this.user = user
        this.name = name
       
        Object.freeze(this);
    }
}