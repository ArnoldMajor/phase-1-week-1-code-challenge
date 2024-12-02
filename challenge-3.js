// Setting up the prompt module to prompt the user to input basic salary and benefits, you have to install the "prompt-sync" module (see README file)
const prompt = require("prompt-sync")();
let salaryInput = Number(prompt("Please enter your basic salary: ", ""))
let benefitsInput = Number(prompt("Please enter your total benefits: ", ""))

// Function userPrompt returns the value that has been put in by the user
function userPrompt() {
    return salaryInput, benefitsInput;
}

// User prompt is called first to trigger the input prompt 
userPrompt();

// The Variable basicSalary is declared, this variable holds the value of an individual's basic salary before deductions
const basicSalary = salaryInput;

// The Variable totalBenefits is declared, this variable holds the value of an individual's total benefits before deductions
const totalBenefits = benefitsInput;

// Variable grossSalary holds the value of the Gross Salary which is equal to the total of the basic salary and the total benefits
const grossSalary = basicSalary + totalBenefits;

// Function payeDeductions calculates the expected Pay-As-You-Earn Tax deductions
const payeDeductions = function (grossSalary) {
    // These conditions check the salary scale and perform the respective tax rate
    if (grossSalary > 800000) {
        return grossSalary * 0.35;
    } else if (grossSalary >= 500001 && grossSalary <= 800000) {
        return grossSalary * 0.325;
    } else if (grossSalary >= 32334 && grossSalary <= 500000) {
        return grossSalary * 0.3;
    } else if (grossSalary >= 24001 && grossSalary <= 32333) {
        return grossSalary * 0.25;
    } else if (grossSalary <= 24000) {
        return grossSalary * 0.1;
    } else return 'Put in the salary as a number!'

}


// Function nhifDeductions matches the salary to the corresponding deduction
const nhifDeductions = function (grossSalary) {
    // These conditions check the salary scale and match it to its respective deduction
    if (grossSalary > 100000) {
        return 1700
    } else if (grossSalary >= 90000 && grossSalary <= 99999) {
        return 1600;
    } else if (grossSalary >= 80000 && grossSalary <= 89999) {
        return 1500;
    } else if (grossSalary >= 70000 && grossSalary <= 79999) {
        return 1400;
    } else if (grossSalary >= 60000 && grossSalary <= 69999) {
        return 1300;
    } else if (grossSalary >= 50000 && grossSalary <= 59999) {
        return 1200;
    } else if (grossSalary >= 45000 && grossSalary <= 49999) {
        return 1100;
    } else if (grossSalary >= 40000 && grossSalary <= 44999) {
        return 1000;
    } else if (grossSalary >= 35000 && grossSalary <= 39999) {
        return 950;
    } else if (grossSalary >= 30000 && grossSalary <= 34999) {
        return 900;
    } else if (grossSalary >= 25000 && grossSalary <= 29999) {
        return 850;
    } else if (grossSalary >= 20000 && grossSalary <= 24999) {
        return 750;
    } else if (grossSalary >= 15000 && grossSalary <= 19999) {
        return 600;
    } else if (grossSalary >= 12000 && grossSalary <= 14999) {
        return 500;
    } else if (grossSalary >= 8000 && grossSalary <= 11999) {
        return 400;
    } else if (grossSalary >= 6000 && grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 5999) {
        return 150;
    } else return 'Put in the salary as a number!'
}


// Function nssfDeductions calculates the expected nssf deduction from the salary
const nssfDeductions = function (grossSalary) {
    if (grossSalary <= 7000) {
        return grossSalary * 0.06;
    } else if (grossSalary >= 7001 && grossSalary <= 36000) {
        return grossSalary * 0.06;
    } else if (grossSalary > 36000) {
        return 0;
    }
}

// Variable totalDeductions holds the value of the all the deductions summed up
const totalDeductions = payeDeductions(grossSalary) + nhifDeductions(grossSalary) + nssfDeductions(grossSalary);

// Variable netSalary holds the value of the Net Salary which is the difference of the Gross Salary and the deductions
const netSalary = grossSalary - totalDeductions;

// This conditions checks whether the prompt input exists and is a number then prints out the Gross Salary and the Net Salary after deductions
if (grossSalary) {
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Net Salary: ${netSalary}`);
} else if (!grossSalary) {
    console.log('Put in the salary as a number!')
}
