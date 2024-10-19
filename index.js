/**
 * Debugging Guide
 * 1. Make the code more readable ✅
 * 2. Pick up calculation errors ✅
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, 
   it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc) ✅
 */

// Given Parameters

// ⚠️ My Changes : Given more descriptive variable names.

const velocity = 10000; // (km/h)
const acceleration = 3; // (m/s^2)
const timeInSeconds = 3600; // (1 hour)
const distance = 0; // distance (km)
const fuel = 5000; // (kg)
const fuelBurnRate = 0.5; // (kg/s)



/* --- Functions to check if a valid input is given for velocity and acceleration --- */

const checkUnits = (vel, acc) => {
  if (typeof vel !== "number" || typeof acc !== "number") {
      throw new Error("Velocity and acceleration should be numbers.");
  }
  
  if (vel < 0) {
      throw new Error("Velocity cannot be negative.");
  }

  if (acc < 0) {
      throw new Error("Acceleration cannot be negative.");
  }
};

/* --- --- --- */



/*--- Function to convert Ms to Km/h --- */

const convertKmHtoMs = (vel) => {
  return vel * 1000 / 3600;
};

const convertMstoKmH = (vel) => {
  return vel * 3600 / 1000;
};

/*--- --- --- */


// Pick up an error with how the function below is called and make it robust to such errors✅
/* --- Calculate new Velocity function --- */

//⚠️ My Changes : Includes new funciton to ensure all units are converted and used in a correct calculation. 

const calcNewVel = (velocity, acceleration, timeInSeconds) => {
  checkUnits(velocity,acceleration)

  const velocityMs = convertKmHtoMs(velocity)
  const newVelocityMs = velocityMs + (acceleration * timeInSeconds)
  return convertMstoKmH(newVelocityMs)
}

/* --- --- --- */



const newDistance = distance + (velocity*(timeInSeconds/3600)) //calculates new distance
const remainingFuel = fuel - (fuelBurnRate * timeInSeconds) //calculates remaining fuel
const newVelocity = calcNewVel(velocity, acceleration, timeInSeconds) //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






