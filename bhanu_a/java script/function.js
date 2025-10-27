
//write a function that takes percentages and output grades

// let marks=  50;

// function getGrade(percentage) {
//   if (percentage >= 90) {
//    console.log("your Grade: A+");
//   } 
//   else if (percentage >= 80) {
//     console.log("your Grade: A");
//   } 
//   else if (percentage >= 70) {
//      console.log("your Grade: B");
//   }
//    else if (percentage >= 60) {
//     console.log(" your Grade: C") ;
//   }
//    else if (percentage >= 50) {
//     console.log("your Grade: D") ;
//   }
//    else {
//     console.log("Grade: Fail") ;
  
// }
//   getGrade(marks)


//  // weather warning function

//    function getWeatherAlert(condition) {

//  return condition === "heavy_rain" ?
//          condition === "light_rain"  ?
//          condition === "snowing"  ?
      
//          returnmessage:

//    }

//  console.log(getWeatherAlert("heavy_rain")); 
// console.log(getWeatherAlert("snowing"));
// console.log(getWeatherAlert("sunny"));   
   


// user greeting Function

function getUserGreeting(role) {
  const greeting =
    role === "admin"
      ? "welcome,Adminstrator! Full control granted."
      : role === "editor"
      ? "Welcome Editor! Limited content access."
      : role === "viewer"
      ? "Welcome,Viewer!Browse content."

      : "Hello! Please select a valid role.";

  console.log(greeting);
}
getUserGreeting("admin");   
getUserGreeting("editor");  
getUserGreeting("viewer");  
getUserGreeting("guest");   
