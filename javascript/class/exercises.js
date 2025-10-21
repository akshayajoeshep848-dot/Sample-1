// let year = Number(prompt("Enter a year"));

// if (year % 4 == 0) {
//   if (year % 400 == 0) {
//     console.log("This is a century leap year");
//   } else if (year % 100 != 0) {
//     console.log("This is a leap year");
//   } else {
//     console.log("Not a leap year");
//   }
// } else {
//   console.log("Not a leap year");
// }

// if (year % 400 == 0) {
//   console.log("This is a century leap year");
// } else if (year % 100 != 0 && year % 4 == 0) {
//   console.log("This is  leap year");
// } else {
//   console.log("not a leap year");
// }

//Problem Statement:
//Take a 3-digit number and print the sum of its digits using arithmetic operators.
// 497
let str = prompt("Enter a number");
let sum = 0;
let num = Number(str);
for (let i = 0; i < str.length; i++) {
  //   console.log(`start of loop ${i}`);
  //   console.log("input: num =", num);
  // step 1: get last digit
  //   console.log("Sum:", sum);
  //   console.log(`Step 1: sum = sum + (num % 10);`);
  sum = sum + (num % 10);
  //   console.log("OUTPUT: sum =", sum);
  // step 2: reduce num by one place
  //   console.log(`Step 2: num = num / 10;`);
  //   num = num / 10;
  //   console.log("OUTPUT: num =", num);
  // step3: truncate decimal place
  //   console.log(`Step 2: num = Math.floor(num);`);
  num = Math.floor(num / 10);
  //   console.log("OUTPUT: num =", num);
  //   console.log(`End of loop ${i}`);
}

console.log(`Sum of digits of given number ${str} = ${sum}`);
