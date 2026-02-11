import {UserRepositories} from '../../adpter/outbound/repository/repositoryUser.js'
import { LoginUserCase} from '../../core/use-cases/userCaseLogin.js'

import UserModel from '../../adpter/outbound/model/modelUser.js'

export const makeLoginUser = () => {
    const userRepository = new UserRepositories(UserModel);
    const loginUserCase = new LoginUserCase(userRepository);
}