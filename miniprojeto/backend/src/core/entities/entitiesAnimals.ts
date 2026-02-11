export class Animal{
    public id?: number
    public idUser: number
    public name: string
    public age: number
    public species: string
    public gender: string

    constructor(idUser: number, name: string, species: string, age: number, gender: string, id?: number){
        this.id= id
        this.idUser= idUser
        this.name = name
        this.age= age
        this.species =species
        this.gender = gender
    }
}