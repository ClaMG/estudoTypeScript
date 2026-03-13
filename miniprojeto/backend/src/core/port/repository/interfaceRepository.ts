import {User} from '../../entities/entitiesUser'

export interface IUserRepository{
    save(user: User):Promise<boolean>
    update(user: User): Promise<boolean>
    findByUser( user: User["user"]): Promise<User | null>
    findByEmail( email: User["email"]): Promise<User | null>
    findById( idUser: User["id"]): Promise<User | null>
    findAllAdmin(): Promise<User[]>;    
    delete(idUser: User["id"]): Promise<boolean>;

    //admin
    seeAll(): Promise<User[]>
    
}
