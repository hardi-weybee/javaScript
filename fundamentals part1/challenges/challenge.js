/*1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John*/

let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
console.log(markBMI);

let johnBMI = johnWeight / johnHeight ** 2;
console.log(johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
console.log(markBMI);

johnBMI = johnWeight / johnHeight ** 2;
console.log(johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);


/*1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"*/

if(markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

if(markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}


/*1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks 
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy*/

//let teamDolphins = (96 + 108 + 89) / 3;
//let teamKoalas = (88 + 91 + 110) / 3;
//console.log(teamDolphins, teamKoalas);

//let teamDolphins = (97 + 112 + 101) / 3;
//let teamKoalas = (109 + 95 + 123) / 3;
//console.log(teamDolphins, teamKoalas);

let teamDolphins = (97 + 112 + 101) / 3;
let teamKoalas = (109 + 95 + 106) / 3;
console.log(teamDolphins, teamKoalas);

if (teamDolphins > teamKoalas  && teamDolphins >= 100) {
    console.log("team Dolphins is the winner");
} else if (teamKoalas > teamDolphins && teamKoalas >= 100) {
    console.log("Team Koalas is the winner");
}  else if (teamDolphins === teamKoalas && teamDolphins >= 100 && teamKoalas >= 100) {
    console.log("There is a draw");
} else {
    console.log("Team Koalas is the winner");
}


/*1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”*/

//let bill = 275;
//let bill = 40;
let bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
let total = bill + tip;
console.log(` The bill was ${bill}, the tip was ${tip}, and the total value is ${total}`);