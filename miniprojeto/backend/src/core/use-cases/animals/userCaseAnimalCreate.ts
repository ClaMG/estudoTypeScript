import {Animal} from '../../entities/entitiesAnimals.js'
import {IAnimalRepository} from '../../port/interfaceRepositoryAnimals.js'
import { ICreateAnimalRequest } from '../../port/interfaceUserCaseAnimals.js'
export class CreateAnimalUserCase{
    constructor(private saveAnimalRepository: IAnimalRepository) {}
    async execute({ idUser, name, age, species, gender }: ICreateAnimalRequest): Promise<void> {
        if(idUser == null || name == "" || age == null || species == "" || gender == ""){
            throw new Error("Preencha todos os campos")
        }

        const animal = new Animal(idUser, name, species, gender)

        const verityAnimal = await this.saveAnimalRepository.verifyExists(animal)

        if(verityAnimal){
            throw new Error("Animal já cadastrado")
        }

        const animalEnd = new Animal(idUser, name, species, gender, age)

        await this.saveAnimalRepository.save(animalEnd)
        
    } 
}