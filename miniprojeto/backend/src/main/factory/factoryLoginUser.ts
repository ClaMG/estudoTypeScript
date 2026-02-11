import {UserRepositories} from '../../adpter/outbound/repository/repositoryUser.js'
import { LoginUserCase} from '../../core/use-cases/userCaseLogin.js'
import { ControllerLogin} from '../../adpter/inbound/controler/controlerUserLogin.js'
import UserModel from '../../adpter/outbound/model/modelUser.js'

export const makeLoginUser = () => {
    const userRepository = new UserRepositories(UserModel)

    const loginUserCase = new LoginUserCase(userRepository)

    const loginUserController = new ControllerLogin(loginUserCase)
        
    return loginUserController
}