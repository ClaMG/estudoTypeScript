import {AnimalRepositories} from '../../../adpter/outbound/repository/repositoryAnimals.js'
import {DeleteAnimalUserCase} from '../../../core/use-cases/animals/userCaseAnimalDelet.js'
import {ControllerDeleteAnimal} from '../../../adpter/inbound/controler/animal/controllerAnimalDelete.js'
import AnimalModel from '../../../adpter/outbound/model/modelAnimals.js'
import {UserRepositories} from '../../../adpter/outbound/repository/repositoryUser.js'
import UserModel from '../../../adpter/outbound/model/modelUser.js'

export const makeDeleteAnimal = () => {
    const animalRepository = new AnimalRepositories(AnimalModel);
    const userRepository = new UserRepositories(UserModel);

    const deleteAnimalUserCase = new DeleteAnimalUserCase(animalRepository, userRepository);

    const deleteAnimalController = new ControllerDeleteAnimal(deleteAnimalUserCase);

    return deleteAnimalController;
}