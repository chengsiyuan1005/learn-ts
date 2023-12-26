type AllAnimalType = {
  id?: number;
};

type CatType = {
  title: string;
};

type DogType = {
  name: string;
  title?: string;
};

function arrReverse<T>(arr: T[]) {
  return arr.reverse();
}

function animal<T extends DogType, U extends CatType>(cat: T, dog: U) {
  console.log(cat.name + dog.title);
}

console.log(arrReverse([1, 2, 3]));

animal({ name: "lily" }, { title: "this is a dog" });


function pickObjectKeys<T extends object, K extends keyof T>(obj: T, key: K) {
  return "the K keyof father is T that " + obj[key];
}

console.log(pickObjectKeys({ name: "Jack", title: "is Title" }, 'title'));

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

console.log(merge({name: 'Jack', title: 'flag'}, {description: 'this is a description'}))


// Partial<T> 全部属性 -> 可选
// Require<T> 全部属性 -> 必选
// Readonly<T> 全部属性 -> 只读

type User = {
  id: number,
  title: string,
  description: string
}

let userOne: Partial<User> = {
  id: 22,
  title: 'user one title'
}

console.log(userOne)


type OnlyReadType<T> = {
  readonly [P in keyof T]: T[P]
}

let ReadArr: OnlyReadType = {
  {name: 'Adam'}
}
