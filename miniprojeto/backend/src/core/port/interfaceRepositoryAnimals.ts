import {Animal} from '../entities/entitiesAnimals.js'

export interface IAnimalRepository{
    save(animal: Animal):Promise<void>
    update(animal: Animal): Promise<string>
    verifyExists(animal: Animal): Promise<Animal | null>
    findByAnimalId( idAnimal: Animal["id"]): Promise<Animal | null>
    delete(idAnimal: Animal["id"]): Promise<void>;
    seeAllAnimal(idUser: Animal['idUser']): Promise<Animal[]>
}