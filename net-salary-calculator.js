//First, the variable grossSalary which takes in the gross pay as a value is declared.
const grossSalary = 300000;

//Next, the function payeCalculator takes in the gross pay as a parameter and calculates the respective PAYE deductions.
function payeCalculator(grossSalary){
    if (grossSalary > 0 && grossSalary <= 24000){
        return Math.round(grossSalary * 0.1);
    }

    else if (grossSalary > 24000 && grossSalary <= 32333){
        return Math.round(grossSalary * 0.25);
    }

    else if (grossSalary > 32333 && grossSalary <= 500000){
        return Math.round(grossSalary * 0.3);
    }
    
    else if (grossSalary > 500000 && grossSalary <= 800000){
        return Math.round(grossSalary * 0.325);
    }

    else if (grossSalary > 800000){
        return Math.round(grossSalary * 0.35);
    }

    else {
        return 'Input taxable monthly salary.'
    }
}

//Next, the function nhifCalculator takes in the gross pay as a parameter and calculates the respective NHIF deductions.
function nhifCalculator(grossSalary){
    if (grossSalary > 0 && grossSalary <= 5999){
        return Math.round(grossSalary - 150);
    }

    else if (grossSalary > 5999 && grossSalary <= 7999){
        return Math.round(grossSalary - 300);
    }

    else if (grossSalary > 7999 && grossSalary <= 11999){
        return Math.round(grossSalary - 400);
    }
    
    else if (grossSalary > 11999 && grossSalary <= 14999){
        return Math.round(grossSalary - 500);
    }

    else if (grossSalary > 14999 && grossSalary <= 19999){
        return Math.round(grossSalary - 600);
    }

    else if (grossSalary > 19999 && grossSalary <= 24999){
        return Math.round(grossSalary - 750);
    }

    else if (grossSalary > 24999 && grossSalary <= 29999){
        return Math.round(grossSalary - 850);
    }

    else if (grossSalary > 29999 && grossSalary <= 34999){
        return Math.round(grossSalary - 900);
    }

    else if (grossSalary > 34999 && grossSalary <= 39999){
        return Math.round(grossSalary - 950);
    }

    else if (grossSalary > 39999 && grossSalary <= 44999){
        return Math.round(grossSalary - 1000);
    }

    else if (grossSalary > 44999 && grossSalary <= 49999){
        return Math.round(grossSalary - 1100);
    }

    else if (grossSalary > 49999 && grossSalary <= 59999){
        return Math.round(grossSalary - 1200);
    }

    else if (grossSalary > 59999 && grossSalary <= 69999){
        return Math.round(grossSalary - 1300);
    }

    else if (grossSalary > 69999 && grossSalary <= 79999){
        return Math.round(grossSalary - 1400);
    }

    else if (grossSalary > 79999 && grossSalary <= 89999){
        return Math.round(grossSalary - 1500);
    }

    else if (grossSalary > 89999 && grossSalary <= 99999){
        return Math.round(grossSalary - 1600);
    }

    else if (grossSalary > 99999){
        return Math.round(grossSalary - 1700);
    }
}

//Next, the function nssfCalculator takes in the gross pay as a parameter and calculates the NSSF deduction.
function nssfCalculator(grossSalary){
    return Math.round(grossSalary * 0.6);
}

//The variable totalDeductions finds the total deductions.
const totalDeductions = (payeCalculator(grossSalary) + nhifCalculator(grossSalary) + nssfCalculator(grossSalary));

//We variable netSalary calculates the net salary as an absolute integer.
const netSalary = Math.abs(grossSalary - totalDeductions)

//The net salary is printed out to the console.
console.log (netSalary);