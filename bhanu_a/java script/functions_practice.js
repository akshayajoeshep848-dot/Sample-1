// 1. Print 1 to 10
// function print () {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }
//  print()

 // 2.Print all even numbers from 1 to 20.

//  function print_evenNumbers (evenNumbers) {
//       for (let i = 2; i<= 20; i+=2) {
//         console.log(i);
//       }
//  }
//  print_evenNumbers()

// 3.Calculate the sum of all numbers from 1 to 50.

//  function printsum () {
//     let sum = 0;
//       for (let i = 1; i <= 50; i++) {
//     sum += i;
//   }
//   console.log("Sum:", sum);
// }
//  printsum()

// 4.Print the multiplication table for a given number (e.g., 7).
  // function multiplicationtable (n) {
  //    for (let i = 1; i<= 10; i++){
  // console.log(`${n} x ${i} = ${n * i}`);
  //    }
  // }
  // multiplicationtable (8)

  // 5.Print numbers from 10 down to 1
  //  function print () {
  //    for (let i = 10; i >= 1; i--) {
  //      console.log(i);
  //    }
  //  }
  //   print()

  // 6. Count the number of vowels in a given string.

//   function countVowels() {
//   let str = "bhanu prasad";
//   let count = 0;
//   let vowels = "aeiou";

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i].toLowerCase())) {
//       count++;
//     }
//   }

//   console.log("Number of vowels:", count);
// }

// countVowels();

// 7. Find the largest number in an array
//   function array(){
//    let arr = [3, 8, 1, 6, 10, 2];
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   console.log(max);
// }
// array()

// 8 . Calculate the sum of all elements in a numeric array.

// function numericarray(){
// let numbers = [10,20,30,40,50];
//     let total = 0;
//     for (let i = 0; i <numbers.length; i++) {
//      total += numbers[i];
//     }
//          console.log(total);
//   }
//   numericarray()

// 9. Print numbers from 1 to 100. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".
//   function printnumbers () {
//  for (let i = 1; i <= 100; i++) {
//        if (i % 3 === 0 && i % 5 === 0) {
//          console.log("FizzBuz");
//        } else if (i % 3 === 0) {
//          console.log("Fizz") 
//        } else if (i % 5 === 0) {
        
        
//          console.log("Buzz");
//        }else {
//          console.log(i);
//        }
//       }
//     }
//   printnumbers()

// 10.Calculate the factorial of a number (e.g., 5! = 5*4*3*2*1).
// function factorial(num) {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }
//   return fact;
// }
// console.log(factorial(5));
 
// 11.Reverse a given string.

// function reverseString(str) {
//   let reversedStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }
//   return reversedStr;
// }
// console.log(reverseString("bhanuprasad"));

// 12. Print numbers from 20 down to 0, skipping every other number.
// function numbers() {
//  for (let i = 20; i >= 0; i -= 2) {
//    console.log(i);
//  }
// }
// numbers()

// 13. Check if a specific element exists in an array.
// -----------------------------------
// sep - 4
  //  function addTwoNumbers(num1,num2) {
  //         let sum = num1 + num2;
  //         return sum;
  //       }
  //       console.log(addTwoNumbers(10,20));

  //          let sum = addTwoNumbers(30,40);
  //       console.log(sum);


  // function multiples(num1,num2,num3) {
  //             return num1*num2*num3
  //         }
  //        let value = multiples(4,5,6);
  //        console.log(value);
  //        console.log(multiples(2,5,7));


// write a function to return boolean
// take 2 numbers, return  true if a>b
// else false

// function compareTwonumbers(a,b) {
//   return a > b;
// }
// console.log(compareTwonumbers(20,10));


  //  let sum  = function(x,y) {
  //           return x + y;
  //        };
  //        console.log(sum(10,30));



  // Without recursion 
      // function nthfibo1(n) {
      //   if (n <= 1) {
      //     return n;
      //   }
      //   a = 0;
      //   b = 1;
      //   for (let i = 2; i <= n; i++) {
      //     let next = a + b;
      //     a = b;
      //     b = next;
      //   }
      //   return b;
      // }
      // console.log(nthfibo1(7));

      // With recursion
      // function nthfibo2(n){
      //   if (n<=1){
      //     return n
      //   }
      //   return nthfibo2(n-1)+nthfibo2(n-2)
      // }
      // console.log(nthfibo2(7))


        // let nthFibNumber = function fib(n) {
        //     let nthvalue = 0;
        //     if (n <= 0) {
        //         return;
        //     }else if (n == 1) {
        //         return 0;
        //     }else if (n == 2) {
        //         return 1;
        //     }else {
        //         return fib(n - 1) + (n - 2);
        //     }
        // }
        // console.log(nthFibNumber(9));

         let multiply = (a , b) => a * b;
        console.log(multiply(10,3));