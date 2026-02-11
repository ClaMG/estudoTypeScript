import {Animal} from '../entities/entitiesAnimals.js'

export interface ICreateAnimalRequest {
    idUser: Animal["idUser"]
    name: string
    age: number  
    species: string 
    gender: string 
}

export interface IUpdateAnimalRequest {
    id: Animal["id"]
    idUser: Animal["idUser"]
    name: string
    age: number  
    species: string 
    gender: string 
}

export interface IDeleteAnimalRequest {
    idUser: Animal["idUser"]
    name: string
}

export interface IByIdAnimalRequest {
    id: Animal["id"]
    idUser: Animal["idUser"]
}

export interface IByAllAnimalRequest {
    idUser: Animal["idUser"]
}