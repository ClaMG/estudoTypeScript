import {AnimalRepositories} from '../../../adpter/outbound/repository/repositoryAnimals.js'
import {ByAllAnimalUserCase} from '../../../core/use-cases/animals/userCaseAnimalByAll.js'
import {ControllerByAllAnimal} from '../../../adpter/inbound/controler/animal/controllerAnimalByAll.js'
import AnimalModel from '../../../adpter/outbound/model/modelAnimals.js'
import {UserRepositories} from '../../../adpter/outbound/repository/repositoryUser.js'
import UserModel from '../../../adpter/outbound/model/modelUser.js'

export const makeByAllAnimal = () => {
    const animalRepository = new AnimalRepositories(AnimalModel);
    const userRepository = new UserRepositories(UserModel);
    
    const byAllAnimalUserCase = new ByAllAnimalUserCase(animalRepository, userRepository);

    const byAllAnimalController = new ControllerByAllAnimal(byAllAnimalUserCase);

    return byAllAnimalController;
}