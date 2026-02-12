import {Animal} from '../../entities/entitiesAnimals.js'
import {IAnimalRepository} from '../../port/interfaceRepositoryAnimals.js'
import { IUpdateAnimalRequest } from '../../port/interfaceUserCaseAnimals.js'

export class UpdateAnimalUserCase{
    constructor(private updateAnimalRepository: IAnimalRepository) {}
    async execute({id, idUser, name, age, species, gender }: IUpdateAnimalRequest): Promise<void> {
        if(id == null || idUser == null || name == "" || age == null || species == "" || gender == ""){
            throw new Error("Preencha todos os campos")
        }

        const animal = new Animal(idUser, name, species, gender)
        const idExists = await this.updateAnimalRepository.findByAnimalId(id)

        if(!idExists){
            throw new Error("Esse codigo não exite para nenhum pet")
        }

        if(idUser != idExists.idUser){
            throw new Error("Esse codigo não é do seu pet")
        }

        const verityAnimal = await this.updateAnimalRepository.verifyExists(animal)

        if(verityAnimal && id != verityAnimal.id){
            throw new Error("Animal já cadastrado com esses mesmos dados")
        }

        const animalEnd = new Animal(idUser, name, species, gender, age, id)

        await this.updateAnimalRepository.update(animalEnd)
        
    } 
}