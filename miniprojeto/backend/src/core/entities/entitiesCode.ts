export class Code{
    public idUser: number
    public code: string
    public id?: number
    
    constructor(idUser: number, code: string, id?: number){
        this.idUser = idUser
        this.code = code
        this.id = id
    }
}