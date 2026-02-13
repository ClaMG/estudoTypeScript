import {AnimalRepositories} from '../../../adpter/outbound/repository/repositoryAnimals.js'
import {UpdateAnimalUserCase} from '../../../core/use-cases/animals/userCaseAnimalUpdate.js'
import {ControllerUpdateAnimal} from '../../../adpter/inbound/controler/animal/controllerAnimalUpdate.js'
import AnimalModel from '../../../adpter/outbound/model/modelAnimals.js'
import {UserRepositories} from '../../../adpter/outbound/repository/repositoryUser.js'
import UserModel from '../../../adpter/outbound/model/modelUser.js'

export const makeUpdateAnimal = () => {
    const animalRepository = new AnimalRepositories(AnimalModel);
    const userRepository = new UserRepositories(UserModel);

    const updateAnimalUserCase = new UpdateAnimalUserCase(animalRepository, userRepository);

    const updateAnimalController = new ControllerUpdateAnimal(updateAnimalUserCase);

    return updateAnimalController;
}