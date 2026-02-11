import {User} from '../entities/entitiesUser'

export interface ICreateRequest {
    idUser?: User["id"]
    name: string
    password?: string  
    email: string 
    admin?: boolean
}

export interface IUpdateRequest {
    idUser: User["id"]
    id:User["id"]
    name: string
    password?: string 
    email: string
    admin?: boolean
}

export interface IDeleteRequest {
    idUser: User["id"]
    name: string
}

export interface ILoginRequest {
    name: string
    password: string 
}

export interface IByIdRequest {
    idUser:User["id"]
}

export interface IByAllRequest {
    idUser:User["id"]
}