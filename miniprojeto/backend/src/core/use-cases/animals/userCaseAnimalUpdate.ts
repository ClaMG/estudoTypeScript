import {Animal} from '../../entities/entitiesAnimals.js'
import {IAnimalRepository} from '../../port/repository/interfaceRepositoryAnimals.js'
import { IUpdateAnimalRequest } from '../../port/userCase/interfaceUserCaseAnimals.js'
import { IUserRepository } from '../../port/repository/interfaceRepository.js'
import { NotFoundError} from '../../../utils/erros/erros.js'


export class UpdateAnimalUserCase{
    constructor(private updateAnimalRepository: IAnimalRepository, private byIdUserRepository:IUserRepository) {}
    async execute({idUser, name, species, gender, age, id }: IUpdateAnimalRequest): Promise<void> {
        if(id == null || idUser == null || name == "" || age == null || species == "" || gender == ""){
            throw new NotFoundError("Preencha todos os campos")
        }

        const idUserExists = await this.byIdUserRepository.findById(idUser)

        if(!idUserExists){
            throw new NotFoundError("Não conseguimos localizar o seu usuario")
        }

        const animal = new Animal(idUser, name, species, gender)
        const idExists = await this.updateAnimalRepository.findByAnimalId(id)

        if(!idExists){
            throw new NotFoundError("Esse id não exite para nenhum pet")
        }

        if(!idUserExists.admin && idUser != idExists.idUser){
            throw new NotFoundError("Esse id não é do seu pet")
        }

        const verityAnimal = await this.updateAnimalRepository.verifyExists(animal)

        if(verityAnimal && id != verityAnimal.id){
            throw new NotFoundError("Animal já cadastrado com esses mesmos dados")
        }

        const animalEnd = new Animal(idUser, name, species, gender, age, id)

        await this.updateAnimalRepository.update(animalEnd)
        
    } 
}