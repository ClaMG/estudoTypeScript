import {Animal} from '../../entities/entitiesAnimals.js'
import {IAnimalRepository} from '../../port/interfaceRepositoryAnimals.js'
import { IUpdateAnimalRequest } from '../../port/interfaceUserCaseAnimals.js'
import { IUserRepository } from '../../port/interfaceRepository.js'

export class UpdateAnimalUserCase{
    constructor(private updateAnimalRepository: IAnimalRepository, private byIdUserRepository:IUserRepository) {}
    async execute({idUser, name, species, gender, age, id }: IUpdateAnimalRequest): Promise<void> {
        if(id == null || idUser == null || name == "" || age == null || species == "" || gender == ""){
            throw new Error("Preencha todos os campos")
        }

        const idUserExists = await this.byIdUserRepository.findById(idUser)

        if(!idUserExists){
            throw new Error("Não conseguimos localizar o seu usuario")
        }

        const animal = new Animal(idUser, name, species, gender)
        const idExists = await this.updateAnimalRepository.findByAnimalId(id)

        if(!idExists){
            throw new Error("Esse id não exite para nenhum pet")
        }

        if(!idUserExists.admin && idUser != idExists.idUser){
            throw new Error("Esse id não é do seu pet")
        }

        const verityAnimal = await this.updateAnimalRepository.verifyExists(animal)

        if(verityAnimal && id != verityAnimal.id){
            throw new Error("Animal já cadastrado com esses mesmos dados")
        }

        const animalEnd = new Animal(idUser, name, species, gender, age, id)

        await this.updateAnimalRepository.update(animalEnd)
        
    } 
}