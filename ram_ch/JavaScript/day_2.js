// let year = Number (prompt("Enter a year"));

// if (year % 4 == 0){
//     if (year % 400 ==0){
//     console.log("this is a century leap year");
// } else {
//     console.log("This is a leap year");  
//     }
// }else {
//     console.log("NOT leaf year");
// }

// if (year % 400 ==0){
//     console.log("This is a century leap year");
// }else if (year % 100 != 0 && year % 4 == 0){
//     console.log("This is leap year");
// }else{
//     console.log("not a leap year");
// confirm
// }




let str = prompt("Enter a number");

let sum = 0 ;
let num = Number(str);
for(let i = 0; i< str.length; i++){
    console.log(`start loop ${i}`);
    //step:get last digit
    console.log("sum:",sum);
    console.log(`step 1: sum = sum + (num % 10);`);
    sum = sum + (num % 10);
    console.log("OUTPUT: sum=",sum);
    console
}
