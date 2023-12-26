"use strict";
class Department {
    constructor(id, name, gender) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.emplyees = [];
    }
    describe() {
        console.log(`The user id is ${this.id}, and ${this.gender === 'male' ? 'his' : 'her'} gender is ${this.gender}`);
    }
    addEmployee(emplyee) {
        this.emplyees.push(emplyee);
    }
    printEmployeeInfo() {
        console.log(this.emplyees.length, this.emplyees);
    }
}
const accounting = new Department('d1', 'Accounting', 'male');
accounting.describe();
accounting.addEmployee('Jack');
accounting.addEmployee('Lily');
accounting.printEmployeeInfo();
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(`What can i ${phrase} for u`);
    }
}
let demo = new Person('lily');
demo.greet('swimming');
