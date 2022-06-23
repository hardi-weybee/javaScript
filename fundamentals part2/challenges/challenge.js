"use strict";

/*1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time*/

let calcAverage = (first, second, third) => (first + second + third) / 3;

//const dolphinScore = calcAverage(44, 23, 71);
//const koalasScore = calcAverage(65, 54, 49);
//console.log(dolphinScore,koalasScore);

const dolphinScore = calcAverage(85, 54, 41);
const koalasScore = calcAverage(23, 34, 27);
console.log(dolphinScore,koalasScore);


const checkWinner = function(avgDolphins, avgKoalas) {
    if(avgDolphins >= (2 * avgKoalas)) {
        console.log(`dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`koalas wins (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No one wins..");
    }
}

checkWinner(dolphinScore, koalasScore);


/*1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip*/

let calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let bills = [125, 555, 44];
let tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
];
let total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];

console.log(bills, tips, total);


/*1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"*/

const mark = {
    fullname: "mark miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullname: "john smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullname}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s (${john.bmi})`);
} else {
    console.log(`${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullname}'s (${mark.bmi})`);
}


/*1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!*/

calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
total = [];

for(let i=0; i < bills.length; i++) {
    let t = calcTip(bills[i]);
    tips.push(t);
    total.push(t + bills[i]);
}
console.log(bills, tips, total);


/*Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array*/

calcAverage = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (sum / arr.length);
}
console.log(calcAverage([5, 7, 10]));
console.log(calcAverage(total));