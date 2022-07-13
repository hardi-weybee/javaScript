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



/*Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
as an arrow function, and using chaining!*/

const calcAverageHumanAge1 = ages => ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4)).filter(age => age >= 18).reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const x = calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]);
const y = calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]);
console.log(x, y);



/*1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate 
the recommended food portion and add it to the object as a new property. Do 
not create a new array, simply loop over the array. Forumla: 
recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too 
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
the owners array, and so this one is a bit tricky (on purpose) �
3. Create an array containing all owners of dogs who eat too much 
('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and 
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food 
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food 
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try 
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
portion in an ascending order (keep in mind that the portions are inside the 
array's objects)*/

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28)));


const dogSarah = dogs.find(dog => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recommendedFood ? "much" : "little"}`);


const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);


console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);


console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));


const okay = dog => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10);
console.log(dogs.some(okay));


console.log(dogs.filter(okay));


const sorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sorted);




const arr1 = [
    {id: 1, name: "fenny"}, 
    {id: 2, name: "hemangi"}, 
    {id: 3, name: "hardi"}, 
    {id: 4, name: "nishita"}
]

const arr2 = [
    {id: 1, hobby: "sleeping", created_at: "2021-05-15"}, 
    {id: 2, hobby: "eating", created_at: "2020-05-05"},
    {id: 3, hobby: "dancing", created_at: "2022-05-15"}, 
    {id: 4, hobby: "travel", created_at: "2021-05-15"}, 
    {id: 1, hobby: "drawing", created_at: "2021-05-15"},
    {id: 1, hobby: "badminton", created_at: "2020-05-15"},
    {id: 2, hobby: "sketch", created_at: "2022-05-15"},
    {id: 4, hobby: "designing", created_at: "2021-05-15"},
    {id: 3, hobby: "art & creaft", created_at: "2021-05-15"},
    {id: 2, hobby: "singing", created_at: "2020-05-15"}
]

const res = arr1.map(el => {
    
    const ans = arr2
    .filter(el1 => el.id === el1.id && new Date(el1.created_at).getFullYear() != 2022)
    .flatMap(a => a.hobby)
    .join()
    
    const a = {
        of : el.name,
        hobbies : ans
    }
    return a;
});
console.log(res);