//โปรแกรม A

var x = 10;
if(x === 10){
var y = 100;
    console.log(y); // จะพิมพ์ 100
}
console.log(y); 

//โปรแกรมA2

var x = 10;
if(x === 10){
var y = 100;
    console.log(y); // จะพิมพ์ 100
}
console.log(y); 

//โปรแกรมA3

var x = 10;
let y1 = 100;
if(x === 10) {
    console.log(y1); // จะพิมพ์ 100
}
console.log(y1);


//โปรแกรม B1

let myArray1 = [1, 2, 3];
myArray1.forEach(element => {
    console.log(element); // จะพิมพ์ 1, 2, 3
});

//โปรแกรม B2

let myArray = [1, 2, 3];
for (const iterator of myArray) {
    console.log(iterator); // จะพิมพ์ 1, 2, 3
}

//โปรแกรม B3

let dog = {
    name: "Yoyo", 
    color: "black", 
    age: 2
}
for (const k in dog) {
    console.log(k); // จะพิมพ์ name, color, age
}

//โปรกรม C1

const numbersOne1 = [1, 2, 3];
const numbersTwo2 = [4, 5, numbersOne1];
console.log(numbersTwo2); // จะพิมพ์ [4, 5, [1, 2, 3]]


//โปรกรม C2

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, ...numbersOne];
console.log(numbersTwo); // จะพิมพ์ [4, 5, 1, 2, 3]


//ต้องเรียกใช้ function อย่ํางไรถึงได้ผลลัพธ์เป็น 1+2+3+4

function fun(...input) {
let sum = 0;
for (let i of input) {
sum += i;
}
return sum;
}

