import {User} from '../entities/entitiesUser'

export interface ICreateRequest {
    user: string
    name: string
    email: string 
    password: string  
}

export interface IUpdateRequest {
    idUser: User["id"]
    id:User["id"]
    user: string
    name: string
    email: string
    password?: string 
    admin?: boolean
}

export interface IDeleteRequest {
    idUser: User["id"]
    user: string
}

export interface ILoginRequest {
    user: string
    password: string 
}

export interface IByIdRequest {
    idUser:User["id"]
    user: string
}

export interface IByAllRequest {
    idUser:User["id"]
}