console.log("hello")
// alert("hyy")
var a=10;
let b=10;
const pi=3.142;
console.log(a)
console.log(b)
console.log(pi)

a=20;
b=30;
// pi=3.142; type error it is a constant value it cannot be reassigned
console.log(a)
console.log(b)
console.log(pi)

const c="rakesh";
console.log(c)

//cannot re-declare let
//can re-declare var
var a=20;
//let b=30; will give error

console.log(a)
b="rakesh"
console.log(b)

//assign value while declaring variable
let num1=20;
let num2;

var num3;
var num4=30;
console.log(num1,num2,num3,num4)//if there no value assigned then it is undefined

num2=25;
num3=35;
console.log(num1,num2,num3,num4)

num5=10;
console.log(num5)
//data types
let d=10.1;
console.log(typeof d)

let e="hii";
console.log(typeof e)

let f=true;
console.log(typeof f)

let g;
console.log(typeof g)