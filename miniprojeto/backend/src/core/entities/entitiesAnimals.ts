export class Animal{
    public idUser: number
    public name: string
    public species: string
    public gender: string
    public age?: number
    public id?: number
    public idView?: number

    constructor(idUser: number, name: string, species: string, gender: string, age?: number, id?: number, idView?: number){
        this.idUser= idUser
        this.name = name
        this.species =species
        this.gender = gender
        this.age= age
        this.id= id
        this.idView = idView
    }
}