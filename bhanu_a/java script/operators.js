// >, >=, <, <=, ==, ===, !=, !==,

var a =10;


// (comparision)? true statement : false statement


/*Write a function named getGrade that takes a score (0-100) as an argument
 and returns a letter grade: "A" (90-100), "B" (80-89), "C" (70-79), "D" (60-69), "F" (0-59).*/


  //let a = 10;
 // let b = 20;
   //(a < b)? console.log("a is greater than b"): console.log("a is greater than b");

 let score = prompt("please enter your score:");

 
 score <= 100 && score >= 90
 ? console.log("A")
 :score <=89 && score >=80
 ? console.log("B")
 :score <=79 && score >=70
 ? console.log("C")
 : score <=69 && score >=60
 ? console.log("D")
 :score <=59 && score>=0
 ? console.log("F")
 : console.log(" please enter values  between 0 and 100");

