export class stu {
    constructor(name, id, result, age, address) {
        this.name = name;
        this.id = id;
        this.result = result;
        this.age = age;
        this.address = address;
    }
    book() {
        console.log(`${this.name} got id-${this.id}, lives in ${this.address}`);
    }
}
