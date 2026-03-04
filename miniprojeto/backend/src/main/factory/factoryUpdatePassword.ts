import {CodeRepositories} from '../../adpter/outbound/repository/repositoryCode'
import {UserRepositories} from '../../adpter/outbound/repository/repositoryUser'
import { SendCodeUserCase} from '../../core/use-cases/userCaseSendCode'
import {ControllerUpdatePassword} from '../../adpter/inbound/controler/controlerUserUpdatePassword'
import CodeModel from '../../adpter/outbound/model/modelCode.js'
import UserModel from '../../adpter/outbound/model/modelUser'

export const makeUpdatePasswordUser = () => {
    const userRepository = new UserRepositories(UserModel);
    const codeRepsitory = new CodeRepositories(CodeModel)

    const sendCodeUserCase = new SendCodeUserCase( userRepository, codeRepsitory);

    const sendCodeUserController = new ControllerUpdatePassword(sendCodeUserCase);
    
    return sendCodeUserController;
}