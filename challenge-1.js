// Setting up the prompt module to prompt the user to input marks, you have to install the "prompt-sync" module (see README file)
const prompt = require("prompt-sync")();
let promptInput = Number(prompt("Please enter the marks: ", ""))

// Function userPrompt returns the value that has been put in by the user
function userPrompt() {
    return promptInput;
}

// User prompt is called first to trigger the input prompt 
userPrompt();

// The variable studentMarks is declared, this variable will hold the value of the student's marks which is equal to the prompt input
const studentMarks = promptInput;

// Function studentGrades takes the student's marks as an argument and calculates the corresponding grade
function studentGrades(studentMarks) {
    // This condition checks whether the marks put in range from 0 - 100
    if (studentMarks >= 0 && studentMarks <= 100) {
        // This series of conditions checks the student's marks and matches it to the correspoding grade
        if (studentMarks > 79) {
            console.log("Student grade: A");
        } else if (studentMarks >= 60 && studentMarks <= 79) {
            console.log("Student grade: B");
        } else if (studentMarks >= 50 && studentMarks <= 59) {
            console.log("Student grade: C");
        } else if (studentMarks >= 40 && studentMarks <= 49) {
            console.log("Student grade: D");
        } else if (studentMarks < 40) {
            console.log("Student grade: E");
        }
    }
    // If the marks are out of range, this reminder is triggered
    else console.log("Marks should be 0 - 100!");

}

// This conditions checks whether the prompt input exists and is a number then runs the grading function to print out the grade
if (promptInput) {
    studentGrades(studentMarks);
} else if (!promptInput) {
    console.log("Please put in a number!")
}
