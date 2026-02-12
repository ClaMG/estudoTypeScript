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
    id: Animal["id"]
    idUser: Animal["idUser"]
    name: string
}

export interface IByAllAnimalRequest {
    idView: Animal["idView"]
    idUser: Animal["idUser"]
}