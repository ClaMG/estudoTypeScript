import {UserRepositories} from '../../adpter/outbound/repository/repositoryUser.js'
import { ByAdminViewUserCase} from '../../core/use-cases/userCaseByAdminView.js'
import {ControllerRequestAdmin} from '../../adpter/inbound/controler/controlerUserRequestAdminView.js'
import UserModel from '../../adpter/outbound/model/modelUser.js'

export const makeByAdminViewUser = () => {
    const userRepository = new UserRepositories(UserModel);

    const byAdminViewUserCase = new ByAdminViewUserCase(userRepository);

    const byAdminViewUserController = new ControllerRequestAdmin(byAdminViewUserCase);
    
    return byAdminViewUserController;
}