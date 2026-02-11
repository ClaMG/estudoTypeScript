import {UserRepositories} from '../../adpter/outbound/repository/repositoryUser.js'
import { UpdateUserCase} from '../../core/use-cases/userCaseUpdate.js'
import {ControllerUpdate} from '../../adpter/inbound/controler/controlerUserUpdate.js'
import UserModel from '../../adpter/outbound/model/modelUser.js'

export const makeUpdateUser = () => {
    const userRepository = new UserRepositories(UserModel)

    const updateUserCase = new UpdateUserCase(userRepository)

    const updateUserController = new ControllerUpdate(updateUserCase);
        
    return updateUserController;
}