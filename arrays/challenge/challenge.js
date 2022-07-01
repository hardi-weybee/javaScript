"use strict";



/*Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
�
")
4. Run the function for both test datasets*/

const checkDogs = function(dogsJulia,dogsKate) {

    const dogsJuliaRight = dogsJulia.slice(1, 3);
    console.log(dogsJuliaRight);

    const onlyDogs = dogsJuliaRight.concat(dogsKate);
    console.log(onlyDogs);

    // const onlyDogs = ([...dogsJuliaRight, ...dogsKate]);
    // console.log(onlyDogs);

    onlyDogs.forEach(function(number, i) {
        if(number >= 3) {
            console.log(`dog number ${i + 1} is an adult, and is ${number} years old`);
        } else {
            console.log(`dog number ${i + 1} is still a puppy 🐶`);
        }
    })
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]); 
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);




/*Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages �)
4. Run the function for both test datasets*/

const calcAverageHumanAge = function(ages) {
    const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
    console.log(humanAge);

    const finalAge = humanAge.filter(age => age >= 18);
    console.log(finalAge);

    const average = finalAge.reduce((acc, age) => acc + age, 0) / finalAge.length;
    console.log(average);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);