import {UserRepositories} from '../../adpter/outbound/repository/repositoryUser.js'
import { ByAdminUserCase} from '../../core/use-cases/userCaseByAdmin.js'
import {ControllerRequestAdmin} from '../../adpter/inbound/controler/controlerUserRequestAdmin.js'
import UserModel from '../../adpter/outbound/model/modelUser.js'

export const makeRequestAdminUser = () => {
    const userRepository = new UserRepositories(UserModel);

    const requestAdminUserCase = new ByAdminUserCase(userRepository);

    const requestAdminUserController = new ControllerRequestAdmin(requestAdminUserCase);
    
    return requestAdminUserController;
}