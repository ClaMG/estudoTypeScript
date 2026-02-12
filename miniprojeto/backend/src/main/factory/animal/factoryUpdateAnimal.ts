import {AnimalRepositories} from '../../../adpter/outbound/repository/repositoryAnimals.js'
import {UpdateAnimalUserCase} from '../../../core/use-cases/animals/userCaseAnimalUpdate.js'
import {ControllerUpdateAnimal} from '../../../adpter/inbound/controler/animal/controllerAnimalUpdate.js'
import AnimalModel from '../../../adpter/outbound/model/modelAnimals.js'

export const makeUpdateAnimal = () => {
    const animalRepository = new AnimalRepositories(AnimalModel);

    const updateAnimalUserCase = new UpdateAnimalUserCase(animalRepository);

    const updateAnimalController = new ControllerUpdateAnimal(updateAnimalUserCase);

    return updateAnimalController;
}