//First, the variable vehicleSpeed which takes in the speed as a value is declared.
let vehicleSpeed = 80;
//Secondly, the variable demeritPoints which takes points as a value is declared.
let demeritPoints;

//The function speedDetector takes in the vechicle speed as a parameter and analyzes it to print out the required action.
function speedDetector (vehicleSpeed){
    if (vehicleSpeed < 70){
        return 'OK';
    }
//If the vehicle speed is less than 70, it prints out 'OK'.

    else if (vehicleSpeed > 70){
        demeritPoints = Math.floor((vehicleSpeed - 70)/5);
//If the vehicle speed is greater than 70, it prints out on of two possible values using nested functions.

        if (demeritPoints < 12){
            return `Points: ${demeritPoints}`; 
        }
//If the demerit points are less than 12, it prints out the total points.

        else if (demeritPoints > 12){
            return 'Licence suspended'
        }
    }
//If the demerit points are greater than 12, it prints out 'Licence suspended'

}

console.log(speedDetector(vehicleSpeed));
//Here we print out the results of the function into the console