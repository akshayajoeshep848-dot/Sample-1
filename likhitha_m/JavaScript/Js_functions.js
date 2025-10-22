
        // Function Declaration

        // function greet (name) {
        //     console.log(`Hello, ${name}`);
        // }

        // function call
        // greet ("Alice");
        // greet ("Likhitha");

        // write a function to display if a user is eligible to vote based on age

        // function eligibleToVote (age) {
        //     console.log("printing age is :", age)

            // switch (age){
            //     case age >=18 :
            //         console.log("Eligible to vote");
            //         break;
            //         default:
            //             console.log("Not Eligible to vote");
            //             break;
            //         }
            
            // if (age >= 18) {
            //         console.log("Eligible to vote")
            //     }else {
            //             console.log("Not eligible to vote")
            //         }
            
        //     age < 18 ? console.log("Not Eligible to vote") 
        //     : console.log("Eligible to vote");
        // } 
        // let a = 10;
        // eligibleToVote(a);

        // hello();

        //  Hoisting to var and let
        // write a program to print full name from first name , middle name, last name

        // function fullName (firstName , middleName, lastName){
        //     console.log(`Your full name is : ${firstName}, ${middleName}, ${lastName}`); 
        // }
        // fullName("Likhitha", "Grace", "Molugumati")

        // write a function to print numbers 1 to n 
        // function numberOneToTen (nmbr){
        //     console.log(`Starting of function.....`)
        //     let i = 1;
        //     while (i <= nmbr){
        //         console.log(`${i}`);
        //         i++;
        //     }
        //     console.log(`End of function....`)
        // }
        // // numberOneToTen (a)
        // numberOneToTen (20)


        // function numberOneToTen (nmbr){
        //     console.log(`Starting of function.....`);
        //     console.log(`printing value of i : ${i}`);
        //     for (var i = 1; i <= nmbr; i++){
        //         console.log(i);
        //     }
        //     console.log(`printing value of i : ${i}`)
        //     console.log(`End of function....`)
        // }
        // // numberOneToTen (a)
        // numberOneToTen (20)

        // Write a function to print n factorial
        function factorialOfNumber (positiveInteger){
            let factorial = 1;
            if (positiveInteger == 0){
            }
            for (let i = 1; i <= positiveInteger; i++);{
            factorial *= i;
        }
        console.log(`Factorial of ${positiveInteger} is ${factorial}`);
    }
    
    factorialOfNumber (5);

        // function fact (n){
        //     let i = 1;
        //     let fact = 1;
        //     while (i <= n) {
        //         fact = fact*1
        //         i ++;

        //     }
        // }
