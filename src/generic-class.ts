type strAndNum = string | number

class DataStorage<T> {
    private data: T[] = []
    addItem(item: T) {
        this.data.push(item)
    }
    getItem() {
        return [...this.data]
    }
    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }
}

const demoStorage = new DataStorage<strAndNum>();
demoStorage.addItem('Max')
demoStorage.addItem('Oleg')
demoStorage.addItem(22)

console.log(demoStorage.getItem())


