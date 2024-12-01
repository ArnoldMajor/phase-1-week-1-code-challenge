// Variable vehicleSpeed is declared to the value of a vehicle's speed
let vehicleSpeed;

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

// Function is tested with an argument of 70, 80 & 150, the outputs are expected to be Ok, Points: 2 & License suspended respectively
speedDetector(70)
speedDetector(80)
speedDetector(150)