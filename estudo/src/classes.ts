interface IPerson{
    id: number
    sayMyName():string
}


class Person implements IPerson{
    readonly id: number
    protected name:string // pode ser acessado pela class mãe e subclass
    private age: number //não consegue acessar de outra class

    constructor(id: number, name: string, age: number){
        this.name = name
        this.age = age
        this.id = id
    }

    sayMyName():string {
        return this.name
    }
}


//mesma coisa que acima
class PersonRefect implements IPerson{
    

    constructor(readonly id: number,
    protected name:string ,
    private age: number ){
        
    }

    sayMyName():string {
        return this.name
    }
}

class Employee extends Person{
    constructor(id: number, name: string, age: number){
        super(id,name,age)
    }

    whoAmI(){
        return this.name
    }
}

const person = new Person(1, "sdsdsd", 3)
