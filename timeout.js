let count = 0;
function doSomething(){
    console.log(3333);
}
function welcome(){
    console.log("Welcome ", ++count);
}
console.log(1111);
console.log(2222);
setTimeout(doSomething);
console.log(4444);

const myInterval = setInterval(welcome, 3000);

// we can make a real watch by using setInterval