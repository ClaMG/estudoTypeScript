const returnValue = <T>(value: T): T => value// nomear generic como T

const menssage = returnValue<string>('Hello Word')
const count =returnValue<number>(5)

function getFirsValueFromArray<Type>(array: Type[]){
        return array[0]
}

const firsValueFromStringArray = getFirsValueFromArray<string>(['1','12','34'])
const firsValueFromNumberArray = getFirsValueFromArray<number>([1,12,34])

//Promises

const returnPromise = async(): Promise<number> =>{
    return 5
}

//Class
class GenericNumber<T>{
    zeroValue: T
    sum:(x: T, y: T) => T

    constructor(zeroValue: T, sum: (x: T, y: T) => T ){
        this.zeroValue = zeroValue
        this.sum = sum
    }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number)=>{
    return x+y
})