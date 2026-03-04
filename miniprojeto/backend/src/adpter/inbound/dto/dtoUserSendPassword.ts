import {IForgetPassword} from '../../../core/port/userCase/interfaceUserCase'

export class ForgetPasswordUserDTO {
    public readonly user: string;
    public readonly code: string;
    
    
    constructor({code, user }: IForgetPassword) {
        this.user = user
        this.code = code
       
        Object.freeze(this);
    }
}