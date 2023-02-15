const normalPreson = {
      firstName: 'shakib',
      lastName: 'khan',
      salary: 50000,
      getFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`);
      },
      getPresentBalance: function(cost = 0){
        this.salary = this.salary - cost;
        console.log(this);
        return this.salary;
      }
}
// const balance = normalPreson.getPresentBalance(500);
// console.log(balance);
const heroPerson = {
    firstName: 'hero',
    lastName: 'alom',
    salary: 60000,
};
const friendlyPerson = {
    firstName: 'hero',
    lastName: 'rahim',
    salary: 60000,
};

//normalPreson.getPresentBalance(10000);
const heroBillCharge = normalPreson.getPresentBalance.bind(heroPerson);
heroBillCharge(30000);

const friendPersonBalance = normalPreson.getPresentBalance.bind(friendlyPerson);
friendPersonBalance(300)