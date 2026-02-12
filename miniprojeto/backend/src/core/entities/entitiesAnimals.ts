export class Animal{
    public id?: number
    public idUser: number
    public name: string
    public age?: number
    public species: string
    public gender: string
    public idView?: number

    constructor(idUser: number, name: string, species: string, gender: string, age?: number, id?: number, idView?: number){
        this.id= id
        this.idUser= idUser
        this.name = name
        this.age= age
        this.species =species
        this.gender = gender
        this.idView = idView
    }
}