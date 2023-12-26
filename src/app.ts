

class Department {
    private emplyees: string[] = [];
    constructor(private readonly id: string, public name: string, public gender: string) {

    }
    describe(this: Department) {
        console.log(`The user id is ${this.id}, and ${this.gender === 'male' ? 'his' : 'her'} gender is ${this.gender}`)
    }
    addEmployee(emplyee: string) {
        this.emplyees.push(emplyee)
    }
    printEmployeeInfo() {
        console.log(this.emplyees.length, this.emplyees)
    }
}

const accounting = new Department('d1', 'Accounting', 'male')

accounting.describe()
accounting.addEmployee('Jack')
accounting.addEmployee('Lily')
accounting.printEmployeeInfo()


interface Named {
    readonly name: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable{
    name: string;
    age = 30
    constructor(n: string) {
        this.name = n
    }
    greet(phrase: string): void {
        console.log(`What can i ${phrase} for u` )
    }
}

let demo = new Person('lily')
demo.greet('swimming')

