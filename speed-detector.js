//First, the variable vehicleSpeed which takes in the speed as a value is declared.
let vehicleSpeed = 80;
//Secondly, the variable demeritPoints which takes points as a value is declared.
let demeritPoints;

function speedDetector (vehicleSpeed){
    if (vehicleSpeed < 70){
        return 'OK';
    }

    else if (vehicleSpeed > 70){
        demeritPoints = Math.floor((vehicleSpeed - 70)/5);
        if (demeritPoints < 12){
            return `Points: ${demeritPoints}`; 
        }

        else if (demeritPoints > 12){
            return 'Licence suspended'
        }
    } 

}

console.log(speedDetector(vehicleSpeed));