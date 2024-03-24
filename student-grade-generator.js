let studentMarks;
//Here we declare the variable 'studentMarks' which will take in values that are student marks.

//Next, the function studentGradeGenerator takes in studentMarks as a parameter and analyzes it before giving out the correct grade
function studentGradeGenerator(studentMarks){
    if (studentMarks > 79){
        return 'A';
    }
    //For studentMarks values greater than 79, the result is A.

    else if (studentMarks >= 60 && studentMarks <= 79){
        return 'B';
    }
    //For studentMarks values greater than 60 but less than 79, the result is B.

    else if (studentMarks >= 49 && studentMarks <= 59){
        return 'C';
    }
    //For studentMarks values greater than 49 but less than 59, the result is C.

    else if (studentMarks >= 40 && studentMarks < 49){
        return 'D';
    }
    //For studentMarks values greater than 40 but less than 49, the result is D.

    else if (studentMarks < 40){
        return 'E';
    }
    //For studentMarks values less than 40, the result is E.
}

console.log (studentGradeGenerator());
//Here we put the marks into the function and print out the student grade into the console.

