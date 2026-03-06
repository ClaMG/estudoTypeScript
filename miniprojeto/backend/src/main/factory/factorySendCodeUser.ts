import {CodeRepositories} from '../../adpter/outbound/repository/repositoryCode'
import {UserRepositories} from '../../adpter/outbound/repository/repositoryUser'
import { SendCodeUserCase} from '../../core/use-cases/userCaseSendCode'
import {ControllerSendCode} from '../../adpter/inbound/controler/controlerUserSendCode'
import CodeModel from '../../adpter/outbound/model/modelCode.js'
import UserModel from '../../adpter/outbound/model/modelUser'

export const makeSendCodedUser = () => {
    const CodeRepository = new CodeRepositories(CodeModel);
    const UserRepository = new UserRepositories(UserModel)

    const sendCodedUserCase = new SendCodeUserCase(UserRepository, CodeRepository);

    const sendCodeController = new ControllerSendCode(sendCodedUserCase);
    
    return sendCodeController;
}