import {UserRepositories} from '../../adpter/outbound/repository/repositoryUser.js'
import { DeleteUserCase} from '../../core/use-cases/userCaseDelete.js'
import {ControllerDelete} from '../../adpter/inbound/controler/controlerUserDelete.js'
import UserModel from '../../adpter/outbound/model/modelUser.js'

export const makeDeleteUser = () => {
    const userRepository = new UserRepositories(UserModel);

    const deleteUserCase = new DeleteUserCase(userRepository);

    const deleteUserController = new ControllerDelete(deleteUserCase);
    
    return deleteUserController;
}