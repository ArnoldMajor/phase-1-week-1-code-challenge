// Setting up the prompt module to prompt the user to input speed, you have to install the "prompt-sync" module (see README file)
const prompt = require("prompt-sync")();
let promptInput = Number(prompt("Please enter the speed: ", ""))

// Function userPrompt returns the value that has been put in by the user
function userPrompt() {
    return promptInput;
}

// User prompt is called first to trigger the input prompt 
userPrompt();

// Variable vehicleSpeed is declared to hold the value of a vehicle's speed
const vehicleSpeed = promptInput;

// Function speedDetector takes in vehicleSpeed as an argument and calculates whether it is within or above the speed limit
const speedDetector = (vehicleSpeed) => {
    // Conndition to check whether the speed is within limits
    if (vehicleSpeed <= 70) {
        console.log('Ok')
    } else if (vehicleSpeed > 70) {
        // The points are calculated by taking the speed difference and dividing it by 5. The result is the rounded up
        const demeritPoints = Math.ceil((vehicleSpeed - 70) / 5);
        if (demeritPoints <= 12) {
            console.log(`Points: ${demeritPoints}`)
        } else if (demeritPoints > 12) {
            console.log('License suspended')
        }
    }
}

// This conditions checks whether the prompt input exists and is a number then runs the speedDetector function to print out the speed
if (promptInput) {
    speedDetector(vehicleSpeed);
} else if (!promptInput) {
    console.log("Please put in the speed as a number!")
}