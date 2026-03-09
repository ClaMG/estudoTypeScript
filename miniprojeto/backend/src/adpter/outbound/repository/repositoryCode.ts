import { ModelStatic, Model } from 'sequelize';
import { ICodeRepository} from '../../../core/port/repository/intefaceRepsitoryCode'
import { Code } from '../../../core/entities/entitiesCode';

export class CodeRepositories implements ICodeRepository{
    constructor(private animalModel: ModelStatic<Model<any, any>>) {}

    async saveCode(code: Code): Promise<void> {
        await this.animalModel.create({
            idUser: code.idUser,
            code: code.code
        });
    }

    async findByUserCode(idUser: Code["idUser"]): Promise<Code | null> {
        const codeFound = await this.animalModel.findOne({
            where: {
                idUser: idUser
            },
            raw: true
        }) as any

        if (!codeFound) return null;

        return new Code(
            codeFound.idUser,
            codeFound.code,
            codeFound.id
        );
    }

    async delete(id: Code['id']): Promise<void> {
        await this.animalModel.destroy({
            where: { id: id }
        });
    }

}