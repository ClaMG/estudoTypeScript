import {CodeRepositories} from '../../adpter/outbound/repository/repositoryCode'
import {UserRepositories} from '../../adpter/outbound/repository/repositoryUser'
import { VeryPasswordUserCase} from '../../core/use-cases/userCaseVerityPassword'
import {ControllerUpdatePassword} from '../../adpter/inbound/controler/controlerUserUpdatePassword'
import CodeModel from '../../adpter/outbound/model/modelCode.js'
import UserModel from '../../adpter/outbound/model/modelUser'

export const makeUpdatePasswordUser = () => {
    const userRepository = new UserRepositories(UserModel);
    const codeRepsitory = new CodeRepositories(CodeModel)

    const updatePasswordUserCase = new VeryPasswordUserCase( codeRepsitory, userRepository);

    const updatePasswordUserController = new ControllerUpdatePassword(updatePasswordUserCase);
    
    return updatePasswordUserController;
}