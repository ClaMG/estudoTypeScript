import {AnimalRepositories} from '../../../adpter/outbound/repository/repositoryAnimals.js'
import {CreateAnimalUserCase} from '../../../core/use-cases/animals/userCaseAnimalCreate.js'
import {ControllerCreateAnimal} from '../../../adpter/inbound/controler/animal/controllerAnimalCreate.js'
import AnimalModel from '../../../adpter/outbound/model/modelAnimals.js'

export const makeCreateAnimal = () => {
    const animalRepository = new AnimalRepositories(AnimalModel);

    const createAnimalUserCase = new CreateAnimalUserCase(animalRepository);

    const createAnimalController = new ControllerCreateAnimal(createAnimalUserCase);

    return createAnimalController;
}