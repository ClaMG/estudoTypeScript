import {UserRepositories} from '../../adpter/outbound/repository/repositoryUser.js'
import {CreateUserCase} from '../../core/use-cases/userCaseCreate.js'
import {ControllerCreate} from '../../adpter/inbound/controler/controlerUser.js'
import UserModel from '../../adpter/outbound/model/modelUser.js'

export const makeCreate = () => {
    const userRepository = new UserRepositories(UserModel);

    const createUserCase = new CreateUserCase(userRepository);

    const createUserController = new ControllerCreate(createUserCase);

    return createUserController;
}