let age: number = 5
const name: string = 'Felipe'
const isValid: boolean = true
let idk: any = 5

idk = '12'
idk = true

const ids:number[] = [1,2,3,4,5]
const names: string[] = ['sdsd', 'bsbjdbasd']

//Tupla
const person: [number, string] = [1, "oi"]

//Lista de tuplas
const people:[number, string][] = [
    [1, "felipe"],
    [2,"hugo"],
]

//Intersction
const producId: string | number = "1"

//Enum

enum Direction{
    Up = 1,
    Down = 2
}

const direction = Direction.Up

//Type 

const produto: any = 'bone'

let produtIds = produto as string
let itemId = <string>produto
console.log(direction)