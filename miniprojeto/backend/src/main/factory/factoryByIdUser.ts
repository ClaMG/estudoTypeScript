import {UserRepositories} from '../../adpter/outbound/repository/repositoryUser.js'
import { ByIdUserCase} from '../../core/use-cases/userCaseById.js'
import {ControllerById} from '../../adpter/inbound/controler/controlerUserById.js'
import UserModel from '../../adpter/outbound/model/modelUser.js'

export const makeByIdUser = () => {
    const userRepository = new UserRepositories(UserModel);

    const byIdUserCase = new ByIdUserCase(userRepository);

    const byIdUserController = new ControllerById(byIdUserCase);
        
    return byIdUserController;
}