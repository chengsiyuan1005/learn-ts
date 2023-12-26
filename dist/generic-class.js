"use strict";
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    getItem() {
        return [...this.data];
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
}
const demoStorage = new DataStorage();
demoStorage.addItem('Max');
demoStorage.addItem('Oleg');
demoStorage.addItem(22);
console.log(demoStorage.getItem());
