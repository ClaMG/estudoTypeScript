import {ICreateAnimalRequest} from '../../../../core/port/interfaceUserCaseAnimals.js'

export class CreateAnimalDTO {
    public readonly idUser: number;
    public readonly name: string;
    public readonly age: number;
    public readonly species: string;
    public readonly gender: string;
    
    constructor({ idUser, name, age, species, gender }: ICreateAnimalRequest) {
        this.idUser = idUser;
        this.name = name;
        this.age = age;
        this.species = species;
        this.gender = gender;
        

        Object.freeze(this);
    }
}