import { ModelStatic, Model } from 'sequelize';
import { IAnimalRepository} from '../../../core/port/interfaceRepositoryAnimals'
import { Animal } from '../../../core/entities/entitiesAnimals';

export class AnimalRepositories implements IAnimalRepository{
    constructor(private animalModel: ModelStatic<Model<any, any>>) {}

    async save(animal: Animal): Promise<void> {
        await this.animalModel.create({
            idUser: animal.idUser,
            name: animal.name,
            age: animal.age,
            species: animal.species,
            gender: animal.gender
        });
    }

    async update(animal: Animal): Promise<string> {
        const [affectedRows] = await this.animalModel.update({
            idUser: animal.idUser,
            name: animal.name,
            age: animal.age,
            species: animal.species,
            gender: animal.gender
        }, {
            where: { id: animal.id }
        });
        return affectedRows > 0 ? "Atualizado" : "Erro ao atualizar";
    }

    async verifyExists(animal: Animal): Promise<Animal | null> {
        const animalFound = await this.animalModel.findOne({
            where: {
                idUser: animal.idUser,
                name: animal.name,
                age: animal.age,
                species: animal.species,
                gender: animal.gender
            },
            raw: true
        }) as any;

        if (!animalFound) return null;

        return new Animal(
            animalFound.id,
            animalFound.idUser,
            animalFound.name,
            animalFound.age,
            animalFound.species,
            animalFound.gender
        );
    }
    async findByAnimalId(idAnimal: Animal['id']): Promise<Animal | null> {
        const animalFound = await this.animalModel.findOne({
            where: {
                id: idAnimal
            },
            raw: true
        }) as any

        if (!animalFound) return null;

        return new Animal(
            animalFound.id,
            animalFound.idUser,
            animalFound.name,
            animalFound.age,
            animalFound.species,
            animalFound.gender
        );
    }

    async delete(idAnimal: Animal['id']): Promise<void> {
        await this.animalModel.destroy({
            where: { id: idAnimal }
        });
    }
    async seeAllAnimal(idUser: Animal['idUser']): Promise<Animal[]> {
        const animalFound = await this.animalModel.findAll({ 
                    raw: true,
                    order: [['id', 'ASC']],
                    where: { idUser: idUser }
                 }) as any[]
                return animalFound.map(a => new Animal(
                a.id,
                a.idUser,
                a.name, 
                a.age, 
                a.species, 
                a.gender
            ));
    }

}