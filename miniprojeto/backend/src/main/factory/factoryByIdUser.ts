import {UserRepositories} from '../../adpter/outbound/repository/repositoryUser.js'
import { ByIdUserCase} from '../../core/use-cases/userCaseById.js'

import UserModel from '../../adpter/outbound/model/modelUser.js'

export const makeByIdUser = () => {
    const userRepository = new UserRepositories(UserModel);

    const byIdUserCase = new ByIdUserCase(userRepository);
}