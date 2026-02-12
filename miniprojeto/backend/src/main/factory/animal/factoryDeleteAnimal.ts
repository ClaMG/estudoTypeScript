import {AnimalRepositories} from '../../../adpter/outbound/repository/repositoryAnimals.js'
import {DeleteAnimalUserCase} from '../../../core/use-cases/animals/userCaseAnimalDelet.js'
import {ControllerDeleteAnimal} from '../../../adpter/inbound/controler/animal/controllerAnimalDelete.js'
import AnimalModel from '../../../adpter/outbound/model/modelAnimals.js'

export const makeDeleteAnimal = () => {
    const animalRepository = new AnimalRepositories(AnimalModel);

    const deleteAnimalUserCase = new DeleteAnimalUserCase(animalRepository);

    const deleteAnimalController = new ControllerDeleteAnimal(deleteAnimalUserCase);

    return deleteAnimalController;
}