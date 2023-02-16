const myStatus = {
    firstName: 'Md',
    lastName: 'Shajib',
    salary: 25000,
    chargeBill: function(cost, tips){
        this.salary = this.salary - cost - tips;
        console.log(this);
        return this.salary;
    },
    getFullName: function(){
        const name = `${this.firstName} ${this.lastName}`;
        console.log(name);
    }
}
const friendStatus = {
    firstName: 'Firojul',
    lastName: 'Islam',
    salary: 30000,
}

const customerStatus = {
    firstName: 'Ali',
    lastName: 'Hasan',
    salary: 20000,
}
// const fullName = myStatus.chargeBill.bind(friendStatus);
// fullName(10000);

// myStatus.chargeBill.call(friendStatus, 500, 700);
// console.log(myStatus.salary);

myStatus.chargeBill.apply(customerStatus, [500, 1000]);