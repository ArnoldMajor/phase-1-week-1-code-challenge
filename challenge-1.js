// The variable studentMarks is declared, this variable will hold the value of the student's marks and pass it into the function 
let studentMarks;

// Function studentGrades takes the student's marks as an argument and calculates the corresponding grade
function studentGrades(studentMarks) {
    // This condition checks whether the marks put in range from 0 - 100
    if (studentMarks >= 0 && studentMarks <= 100) {
        // This series of conditions checks the student's marks and matches it to the correspoding grade
        if (studentMarks > 79) {
            return "Student grade: A";
        } else if (studentMarks >= 60 && studentMarks <= 79) {
            return "Student grade: B"
        } else if (studentMarks >= 50 && studentMarks <= 59) {
            return "Student grade: C"
        } else if (studentMarks >= 40 && studentMarks <= 49) {
            return "Student grade: D"
        } else if (studentMarks < 40) {
            return "Student grade: E"
        }
    }
    // If the marks are out of range, this reminder is triggered
    else return "Marks should be 0 - 100!"

}

// Function is tested with various scores
console.log(studentGrades(80))
console.log(studentGrades(79))
console.log(studentGrades(56))
console.log(studentGrades(41))
console.log(studentGrades(39))