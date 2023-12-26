type propertyArr = {
  title: string[]
}

const exampleArr: propertyArr = {
  title: ['article', 'books']
}

console.log(exampleArr.title)


type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type bothAll = Admin & Employee;

type selOne = Admin | Employee;

const e1: bothAll = {
  name: "Lily",
  privileges: ["item-1", "item-2"],
  startDate: new Date(),
};

const e2: selOne = {
  name: "Jack",
  privileges: ["dog", "cat"],
};

console.log(e1.name, typeof e1);

// --
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

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ('load' in vehicle) {
  //     vehicle.load()
  // }
  if (vehicle instanceof Truck) {
    vehicle.load();
  }
}

const v1 = new Car();
const v2 = new Truck();

useVehicle(v1);
useVehicle(v2);

// interface 不适用 typeof 和 instanceof
interface Bird {
  name: "bird";
  flyingSpeed: number;
}

interface Horse {
  name: "horse";
  runningSpeed: number;
}

type SelAnimal = Bird | Horse;

function moveAnimal(animal: SelAnimal) {
  let speed;
  switch (animal.name) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log('animal speed is ' + speed)
}

moveAnimal({name: 'bird', flyingSpeed: 3000})

// type casting
// const useInputEl = <HTMLInputElement>document.getElementById('input1') // 1
// const useInputEl = document.getElementById('input1') as HTMLInputElement  // 2
const useInputEl = document.getElementById('input1')


// 3
if (useInputEl) {
    // (useInputEl as HTMLInputElement).value = 'this value show by ts'
    (<HTMLInputElement>useInputEl).value = 'this value show by ts'
}

console.log(useInputEl)


/**
 * interface []
 */

interface ErrorContainer {
    [props: string]: string
}

const err1: ErrorContainer = {
    email: 'err email 1',
    tips: 'this is a tips'
}

const err2: ErrorContainer = {
    name: 'special name'
}
