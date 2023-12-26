"use strict";
function arrReverse(arr) {
    return arr.reverse();
}
function animal(cat, dog) {
    console.log(cat.name + dog.title);
}
console.log(arrReverse([1, 2, 3]));
animal({ name: "lily" }, { title: "this is a dog" });
function pickObjectKeys(obj, key) {
    return "the K keyof father is T that " + obj[key];
}
console.log(pickObjectKeys({ name: "Jack", title: "is Title" }, 'title'));
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name: 'Jack', title: 'flag' }, { description: 'this is a description' }));
let userOne = {
    id: 22,
    title: 'user one title'
};
console.log(userOne);
let ReadArr = {};
{
    name: 'Adam';
}
