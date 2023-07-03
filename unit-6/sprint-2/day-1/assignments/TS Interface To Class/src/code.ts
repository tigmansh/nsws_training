import { IPerson } from "./interface";

// This is the class that should use the interface
class Person implements IPerson {
    constructor(
        public first_name: string,
        public last_name: string,
        public email: string,
        public phone: number
    ) { }

    PrintFullName() {
        return `${this.first_name} ${this.last_name}`;
    }
}
export default Person;