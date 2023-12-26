"use strict";
const exampleArr = {
    title: ['article', 'books']
};
console.log(exampleArr.title);
const e1 = {
    name: "Lily",
    privileges: ["item-1", "item-2"],
    startDate: new Date(),
};
const e2 = {
    name: "Jack",
    privileges: ["dog", "cat"],
};
console.log(e1.name, typeof e1);
class Car {
    drive() {
        console.log("driving...");
    }
}
class Truck {
    drive() {
        console.log("driving truck...");
    }
    load() {
        console.log("load sth...");
    }
}
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.load();
    }
}
const v1 = new Car();
const v2 = new Truck();
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.name) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log('animal speed is ' + speed);
}
moveAnimal({ name: 'bird', flyingSpeed: 3000 });
const useInputEl = document.getElementById('input1');
if (useInputEl) {
    useInputEl.value = 'this value show by ts';
}
console.log(useInputEl);
const err1 = {
    email: 'err email 1',
    tips: 'this is a tips'
};
const err2 = {
    name: 'special name'
};
