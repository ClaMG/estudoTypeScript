export class Code{
    public id?: number
    public idUser: number
    public code: string

    constructor(idUser: number, code: string, id?: number){
        this.id = id
        this.idUser = idUser
        this.code = code
    }
}