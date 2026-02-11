import {UserRepositories} from '../../adpter/outbound/repository/repositoryUser.js'
import { ByAllUserCase} from '../../core/use-cases/userCaseByAll.js'
import { ControllerByAll} from "../../adpter/inbound/controler/controlerUserByAll.js"
import UserModel from '../../adpter/outbound/model/modelUser.js'

export const makeByAllUser = () => {
    const userRepository = new UserRepositories(UserModel);

    const byAllUserCase = new ByAllUserCase(userRepository);

    const byAllUserController = new ControllerByAll(byAllUserCase);
        
    return byAllUserController;
}