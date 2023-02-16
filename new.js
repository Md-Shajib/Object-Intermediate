class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    getNetSalary(cost){
        this.salary = this.salary - cost;
    }
}

const friendlyPerson = new Person('Hero', 'Alom', 25000);
console.log(friendlyPerson);

const heroPerson = new Person('Hero', 'Balam', 20000);
heroPerson.getNetSalary(5000);
console.log(heroPerson);