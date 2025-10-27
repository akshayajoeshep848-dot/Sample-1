/*Write a function named getGrade that takes a score (0-100) as an argument
 and returns a letter grade: "A" (90-100), "B" (80-89), "C" (70-79), "D" (60-69), "F" (0-59).*/

 function getGrade(score) {
    switch(score){
        case score <=100 && score>=90:
            return "A";

            case score>=80 && score<=89:
                return "B";

                case score>=70 && score<=79:
                return "C";

                case score>=60 && score<=69:
                return "D";

                case score>=0 && score<=59:
                    return "F";

                    default:

                    return "please enter values between 0 and 100";

 }

 }