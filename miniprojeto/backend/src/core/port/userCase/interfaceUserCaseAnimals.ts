import {Animal} from '../../entities/entitiesAnimals.js'

export interface ICreateAnimalRequest {
    idUser: Animal["idUser"]
    name: string
    species: string 
    gender: string 
    age: number  
}

export interface IUpdateAnimalRequest {
    idUser: Animal["idUser"]
    name: string
    species: string 
    gender: string 
    age: number  
    id: Animal["id"]
}

export interface IDeleteAnimalRequest {
    id: Animal["id"]
    idUser: Animal["idUser"]
    name: string
}

export interface IByAllAnimalRequest {
    idView?: Animal["idView"]
    idUser: Animal["idUser"]
}