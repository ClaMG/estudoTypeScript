interface MathFunction{
    (x: number, y:number): number
}


const Isum: MathFunction = (x: number, y:number): number=>{
    return x+y
}

const sub: MathFunction = (x: number, y: number)=>{
    return x-y
}
const sum = (x: number, y:number): string | number=>{
    return (x+y).toString()
}

const value = sum(1,8)

const log = (mensage: string): void =>{
    console.log(mensage)
}

