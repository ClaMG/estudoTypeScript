import { ModelStatic, Model } from 'sequelize';
import { IAnimalRepository} from '../../../core/port/repository/interfaceRepositoryAnimals'
import { Animal } from '../../../core/entities/entitiesAnimals';

export class AnimalRepositories implements IAnimalRepository{
    constructor(private animalModel: ModelStatic<Model<any, any>>) {}

    async save(animal: Animal): Promise<void> {
        await this.animalModel.create({
            idUser: animal.idUser,
            name: animal.name,
            species: animal.species,
            gender: animal.gender,
            age: animal.age
        });
    }

    async update(animal: Animal): Promise<string> {
        const [affectedRows] = await this.animalModel.update({
            idUser: animal.idUser,
            name: animal.name,
            species: animal.species,
            gender: animal.gender,
            age: animal.age
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
                species: animal.species,
                gender: animal.gender
            },
            raw: true
        }) as any;

        if (!animalFound) return null;

        return new Animal(
            animalFound.idUser,
            animalFound.name,
            animalFound.species,
            animalFound.gender,
            animalFound.age,
            animalFound.id,
        );
    }
    async findByAnimalId(id: Animal['id']): Promise<Animal | null> {
        const animalFound = await this.animalModel.findOne({
            where: {
                id: id
            },
            raw: true
        }) as any

        if (!animalFound) return null;

        return new Animal(
            animalFound.idUser,
            animalFound.name,
            animalFound.species,
            animalFound.gender,
            animalFound.age,
            animalFound.id,
        );
    }

    async delete(id: Animal['id']): Promise<void> {
        await this.animalModel.destroy({
            where: { id: id }
        });
    }

    async seeAllAnimal(idUser: Animal['idUser']): Promise<Animal[]> {
        const animalFound = await this.animalModel.findAll({ 
                    raw: true,
                    where: { idUser: Number(idUser) },
                    order: [['id', 'ASC']]
                 }) as Array<any>
                return animalFound.map(a => new Animal(
                    a.idUser,
                    a.name, 
                    a.species, 
                    a.gender,
                    a.age, 
                    a.id
            ));
    }

}