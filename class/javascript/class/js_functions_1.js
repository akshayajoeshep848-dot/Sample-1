//function declaration

function hello() {
  console.log(`hello`);
}

function greet(name) {
  console.log(`Hi ${name}`);
}

// function call
greet("John");
greet(10);

// write a function to display if a user is eligible to vote based on age
function eligibleToVote(age) {
  console.log("printing age:", age);
  age < 18
    ? console.log("Not eligible to vote")
    : console.log("eligible to vote");
}

eligibleToVote(a);
printFullName("Pawan", "Kalyan", "Konidela");
hello();

//Hoisting
// write a function to print full name from first name, middle name, last name
function printFullName(firstName, middleName, lastName) {
  console.log(`Your full name is: ${firstName} ${middleName} ${lastName}`);
}

var a = 10;
// eligibleToVote(a);

// write a function to print values from 1 to n

function printPositiveIntegers(postiveInteger) {
  console.log(`start of function...`);
  console.log(`Printing value of i: ${i}`);
  for (var i = 1; i <= postiveInteger; i++) {
    console.log(i);
  }
  console.log(`Printing value of i: ${i}`);
  console.log(`End of function`);
}
// console.log(i);
// printPositiveIntegers(a);
// printPositiveIntegers(20);

function factorialOfNumber(postiveInteger) {
  console.log(`Positive Integer: ${postiveInteger}`);
  let factorial = 1;
  if (postiveInteger == 0) {
  }
  for (let i = 1; i <= postiveInteger; i++) {
    factorial *= i;
  }
  console.log(`Factorial of ${postiveInteger} is ${factorial}`);
}

factorialOfNumber(0);
// factorialOfNumber(a);
