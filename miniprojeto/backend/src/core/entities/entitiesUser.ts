export class User{
    public id?: number
    public user: string
    public name: string
    public email: string
    public password: string
    public admin?: boolean

    constructor(user: string, name: string, email: string, password: string, admin?: boolean, id?: number){
        this.id= id
        this.user = user
        this.name = name
        this.email =email
        this.password= password
        this.admin = admin
    }
}