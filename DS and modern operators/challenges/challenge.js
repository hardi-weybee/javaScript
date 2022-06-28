"use strict";

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
        ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    }
};
// Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);

// The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the 
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 
// 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {odds: {team1, x:draw, team2}} = game;
console.log(team1, draw,team2);

// Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the 
// number of goals that were scored in total (number of player names passed in)
const printGoals = function(...players) {
    console.log(players);
    console.log(`${players.length} goals scored`);
}
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
team1 > team2 && console.log("team 2 is likely to win");
team1 < team2 && console.log("team 1 is likely to win");






/* 1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}*/

for(const[number, player] of game.scored.entries()) {
    console.log(`goal ${number + 1}: ${player}`);
}


const odds = Object.values(game.odds);
let avg = 0;
for(const x of Object.values(game.odds)) 
    avg += x;
avg = avg / odds.length;
console.log(avg);


for(const[team, x] of Object.entries(game.odds)) {
    const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
    console.log(`odd of ${teamStr} ${x}`);
}




/*1. Create an array 'events' of the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL*/

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

for(const [time, event]of gameEvents) {
    const half = time <= 45 ? "FIRST" : "SECOND";
    console.log(`[${half} HALF] ${time} : ${event}`);
}




/*Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable 
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector("button").addEventListener("click", function() {
    const str = document.querySelector("textarea").value;
    const text = str.split("\n");
    // console.log(str);
    // console.log(text);

    for(const [i, word] of text.entries()) {
        const [one, two] = word.toLowerCase().trim().split("_");
        const result = `${one}${two.replace(two[0], two[0].toUpperCase())}`;
        console.log(`${result.padEnd(25)}${"👍".repeat(i + 1)}`);
    }
})





/*🔴 Delayed Departure from FAO to TXL (11h25)
              Arrival from BRU to FAO (11h45)
   🔴 Delayed Arrival from HEL to FAO (12h05)
            Departure from FAO to LIS (12h30)*/

const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// console.log(flights.split("+"));

for(const str of flights.split("+")) {
    const [type, from, to, time] = str.split(";");
    const result = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll("_", " ")} ${from.slice(0, 3).toUpperCase()} ${to.slice(0, 3).toUpperCase()} (${time.replace(":", "h")})`;
    console.log(result.padStart(40));
}