import {IUpdateAnimalRequest} from '../../../../core/port/userCase/interfaceUserCaseAnimals.js'

export class UpdateAnimalDTO {
    public readonly id: number;
    public readonly idUser: number;
    public readonly name: string;
    public readonly age: number;
    public readonly species: string;
    public readonly gender: string;
    
    constructor({id, idUser, name, age, species, gender }: IUpdateAnimalRequest) {
         if (id === undefined) {
            throw new Error("O codigo do animal é obrigatório para a atualizar.");
        }
        this.id = id;
        this.idUser = idUser;
        this.name = name;
        this.age = age;
        this.species = species;
        this.gender = gender;
        

        Object.freeze(this);
    }
}

