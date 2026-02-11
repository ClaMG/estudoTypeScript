export class User{
    public id?: number
    public name: string
    public age: number
    public species: string
    public gender: string

    constructor(name: string, species: string, age: number, gender: string, id?: number){
        this.id= id
        this.name = name
        this.age= age
        this.species =species
        this.gender = gender
    }
}