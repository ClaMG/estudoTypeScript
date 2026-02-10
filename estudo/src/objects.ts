//Type

type Order = {
    productId: string
    price: number
}

type User ={
    firsName: string
    age: number
    password: string
    email?: string //? torna opcional
    orders: Order[],
    register(): string
}

const user: User = {
    firsName: "erick",
    age: 20,
    password: "dsfsdf",
    email: "sdhsd",
    orders: [{productId: "1", price: 200}],
    register(){
        return "fsdfds"
    }
}

const print = (mensage:string)=>{}

print(user.email!)// tira o undefined(ignora o '?')

//Unions
type Author ={
    books: string[]
}

const author: Author & User = {
    age: 2,
    books:["1"],
    password: 'sdsds',
    firsName:'sdasd',
    orders:[],
    register() {
        return "sdfs"
    },
}

//Interface

interface UserInterface{
     name: string 
    email: string
}

const emailUser: UserInterface={
    email:'dsgsdhfghsdf',
    name: 'asdasd',
}

interface AuthorInterface{
    readonly books: string[] //apenas para leitura(só pode adicionar uma vez)
}

const newAuthor: AuthorInterface & UserInterface = {
    books:["1"],
    email: 'sdasd',
    name: "sdsdfsdf",
}

type Grade = number | string
const grade: Grade = 1