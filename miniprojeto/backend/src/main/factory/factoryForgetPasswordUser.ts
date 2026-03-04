import {CodeRepositories} from '../../adpter/outbound/repository/repositoryCode'
import {UserRepositories} from '../../adpter/outbound/repository/repositoryUser'
import { VeryPasswordUserCase} from '../../core/use-cases/userCaseVerityPassword'
import {ControllerForgetPassword} from '../../adpter/inbound/controler/controlerUserForgetPassword'
import CodeModel from '../../adpter/outbound/model/modelCode.js'
import UserModel from '../../adpter/outbound/model/modelUser'

export const makeForgetPasswordUser = () => {
    const CodeRepository = new CodeRepositories(CodeModel);
    const UserRepository = new UserRepositories(UserModel)

    const forgetPasswordUserCase = new VeryPasswordUserCase(CodeRepository, UserRepository);

    const forgetPasswordController = new ControllerForgetPassword(forgetPasswordUserCase);
    
    return forgetPasswordController;
}