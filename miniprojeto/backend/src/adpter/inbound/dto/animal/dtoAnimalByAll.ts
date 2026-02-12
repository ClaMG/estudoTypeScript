import {IByAllAnimalRequest} from '../../../../core/port/interfaceUserCaseAnimals.js'

export class ByAllAnimalDTO {
    public readonly idUser: number;
    public readonly idView?: number;
    
    constructor({ idUser, idView }: IByAllAnimalRequest) {
        this.idUser = idUser;
        this.idView = idView;

        Object.freeze(this);
    }
}