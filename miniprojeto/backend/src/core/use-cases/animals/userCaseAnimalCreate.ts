import {Animal} from '../../entities/entitiesAnimals.js'
import {IAnimalRepository} from '../../port/repository/interfaceRepositoryAnimals.js'
import { ICreateAnimalRequest } from '../../port/userCase/interfaceUserCaseAnimals.js'
import { IUserRepository } from '../../port/repository/interfaceRepository.js'
import { NotFoundError} from '../../../utils/erros/erros.js'

export class CreateAnimalUserCase{
    constructor(private saveAnimalRepository: IAnimalRepository, private byIdUserRepository:IUserRepository) {}
    async execute({ idUser, name, species, gender, age }: ICreateAnimalRequest): Promise<void> {
        if(idUser == null || name == "" || age == null || species == "" || gender == ""){
            throw new NotFoundError("Preencha todos os campos")
        }

        const idUserExists = await this.byIdUserRepository.findById(idUser)

        if(!idUserExists){
            throw new NotFoundError("Não conseguimos localizar o seu usuario")
        }

        const animal = new Animal(idUser, name, species, gender)

        const verityAnimal = await this.saveAnimalRepository.verifyExists(animal)

        if(verityAnimal){
            throw new NotFoundError("Animal já cadastrado")
        }

        const animalEnd = new Animal(idUser, name, species, gender, age)

        await this.saveAnimalRepository.save(animalEnd)
        
    } 
}