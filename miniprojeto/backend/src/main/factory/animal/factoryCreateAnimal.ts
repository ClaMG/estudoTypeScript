import {AnimalRepositories} from '../../../adpter/outbound/repository/repositoryAnimals.js'
import {CreateAnimalUserCase} from '../../../core/use-cases/animals/userCaseAnimalCreate.js'
import {ControllerCreateAnimal} from '../../../adpter/inbound/controler/animal/controllerAnimalCreate.js'
import AnimalModel from '../../../adpter/outbound/model/modelAnimals.js'
import {UserRepositories} from '../../../adpter/outbound/repository/repositoryUser.js'
import UserModel from '../../../adpter/outbound/model/modelUser.js'

export const makeCreateAnimal = () => {
    const animalRepository = new AnimalRepositories(AnimalModel);
    const userRepository = new UserRepositories(UserModel);

    const createAnimalUserCase = new CreateAnimalUserCase(animalRepository, userRepository);

    const createAnimalController = new ControllerCreateAnimal(createAnimalUserCase);

    return createAnimalController;
}