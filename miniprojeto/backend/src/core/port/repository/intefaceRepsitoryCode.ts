import {Code} from '../../entities/entitiesCode'

export interface ICodeRepository{
    saveCode(code: Code):Promise<void>
    delete(id: Code["id"]): Promise<void>;
    findByUserCode( idUser: Code["idUser"]): Promise<Code | null>
}
