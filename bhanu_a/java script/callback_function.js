//callback functions - A function that is called as an argumrnt in another function

//function expression
const a =function(a,b){
    return a+b;
}
console.log(a(10,20));

//callback function

hello(good_bye);
hello(leaveme);
function hello(callback){
    console.log("hello");
    callback();
}
function good_bye(){
    console.log("good bye");
}
function leaveme(){
    console.log("leave me");
}


//example -2 
addTwoNumbers(displayresult,10,20);
addTwoNumbers(display_in_page,10,20)
function addTwoNumbers(callback, a, b){
 let sum = a+b;
 callback(sum);
}
function displayresult(sum){
    console.log(sum);
}
function display_in_page(sum){
    let para = document.getElementById("para-1")
    para.textContent=sum;
}


//example-3

//let array =[1,23,4,5,6,7];

//array.map(printInConsole);
//array.map(double);
//array.map(triple);
//array.map(squre);
//array.map(cube);
//console.log(array);



// let array =[1,23,4,5,6,7];


function printInConsole(element){
   console.log(element);
}
//double

function double(element,index, array){
    array[index] = element * 2 ;
}
//triple

function triple(element,index,array){
    array[index] = element * 3 ;
}
//squre

function squre(element,index,array){
    array[index] = element ** 2;   //array [index] = Math.pow(element, 2)
}

//cube

function cube(element, index, array){
    array[index] = element ** 3 ;    //array [index] = Math.pow(element, 3)
}

// foreach method
array.forEach((element,index,array) => (array[index] = Math.pow(element,3)));
array.forEach((element) => console.log(element));
console.log(array);


// using forEach method
let fruits = ["apple","banana","mango","kiwi","grapes","papaya","sapota","pineapple",]

fruits.forEach(toFirstLetterCaps);
console.log(fruits);
fruits.forEach(display);
  
function toUppercase(element,index,array) {
    array[index] = element.toUppercase();
}
function display(element) {
    console.log(element.toUppercase());

}

function toFirstLetterCaps(element,index,array) {
    array[index] = element.charAt(0).toUppercase() + element.slice(1);
    console.log(array[index]);
}


//async calls
// file read
//database calls 

//let  array = [1,2,3,4,5];
console.log(array);
array.forEach(squre);
console.log(array);

function printInConsole(element) {
    console.log(element);
}

function squre(element,index,array) {
console.log(element **2);
array[index]  = element **2;
}


// write a function to double it 

let array2 = array.map(square);
console.log()

function square (element) {
    return element *2;
}

// reduce

let  = [1,2,3,4,5];
function sum (initialValue,currentValue) {
    initialValue += currentValue;
    return initialValue;
}


  function greet(name) {
           console.log(`Hi ${name}`);
       }

     greet("bhanu");
     greet(10);