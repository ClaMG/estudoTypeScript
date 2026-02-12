export class User{
    public id?: number
    public name: string
    public email: string
    public password: string
    public admin?: boolean

    constructor(name: string, email: string, password: string, admin?: boolean, id?: number){
        this.id= id
        this.name = name
        this.email =email
        this.password= password
        this.admin = admin
    }
}