import {IDeleteAnimalRequest} from '../../../../core/port/userCase/interfaceUserCaseAnimals.js'

export class DeleteAnimalDTO {
    public readonly idUser: number;
    public readonly id: number;
    public readonly name: string;
    
    constructor({id, idUser, name}: IDeleteAnimalRequest) {
        if (id === undefined) {
            throw new Error("O codigo do animal é obrigatório para a exclusão.");
        }
        this.id = id;
        this.idUser = idUser;
        this.name = name; 

        Object.freeze(this);
    }
}