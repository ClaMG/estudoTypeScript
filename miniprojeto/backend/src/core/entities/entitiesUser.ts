export class User{
    public id?: number
    public name?: string
    public password?: string
    public email?: string
    public admin?: boolean

    constructor(name?: string, password?: string, email?: string, admin?: boolean, id?: number){
        this.id= id
        this.name = name
        this.password= password
        this.email =email
        this.admin = admin || false 
    }
}