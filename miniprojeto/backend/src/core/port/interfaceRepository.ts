import {User} from '../entities/entitiesUser'

export interface IUserRepository{
    save(user: User):Promise<void>
    update(user: User): Promise<string>
    findByName( name: User["name"]): Promise<User | null>
    findByEmail( email: User["email"]): Promise<User | null>
    findById( id: User["id"]): Promise<User | null>//
    delete(id: User["id"]): Promise<void>;


    //admin
    seeAll(): Promise<string>//
    
}
