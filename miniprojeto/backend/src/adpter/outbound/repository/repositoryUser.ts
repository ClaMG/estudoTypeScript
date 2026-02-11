import { User } from '../../../core/entities/entitiesUser.js';
import {IUserRepository} from '../../../core/port/interfaceRepository.js'
import { ModelStatic, Model } from 'sequelize';

export class UserRepositories implements IUserRepository{
    constructor(private userModel: ModelStatic<Model<any, any>>) {}
    async save(user: User): Promise<void> {
        await this.userModel.create({
            name: user.name, 
            email: user.email,
            password: user.password,
            admin: user.admin || false,
        });
    }

    async update(user: User): Promise<string> {
        const [affectedRows] = await this.userModel.update({
            name: user.name,
            email: user.email,
            password: user.password,
            admin: user.admin
        }, {
            where: { id: user.id }
        });
        return affectedRows > 0 ? "Atualizado" : "Erro ao atualizar";
    }

    async findByName(name: User['name']): Promise<User | null> {
        const userFound = await this.userModel.findOne({
            where: { name: name },
            raw: true
        })as any
        if (!userFound) return null;
        return new User(userFound.name, userFound.password, userFound.email, userFound.admin, userFound.id);
    
    }

    async findByEmail(email: User['email']): Promise<User | null> {
        const userFound = await this.userModel.findOne({
            where: { email: email },
            raw: true
        })as any
        if (!userFound) return null;
        return new User(userFound.name, userFound.password, userFound.email, userFound.admin, userFound.id);
    
    }

    async findById(id: User['id']): Promise<User | null> {
        const userFound = await this.userModel.findOne({
            where: { id: id },
            raw: true
        })as any

        if (!userFound) return null;
        return new User(userFound.name, userFound.password, userFound.email, userFound.admin, userFound.id);
    }

    async delete(id: User['id']): Promise<void> {
        await this.userModel.destroy({
            where: { id: id }
        });
    }

    async seeAll(): Promise<string> {
        const users = await this.userModel.findAll({ raw: true });
        return JSON.stringify(users);
    }

}