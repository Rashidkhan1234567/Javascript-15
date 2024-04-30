//          Task 01

document.write(`<center><h1><u>Task 01</u></h1></center><br>`);
let random_Positive_Number = Math.random()*9;
document.write(`<center><h2>Number: ${random_Positive_Number.toFixed(5)}</h2></center>`)
let round_Positive_Number = Math.round(random_Positive_Number)
document.write(`<center><h2>Round off value: ${round_Positive_Number}</h2></center>`)
let floor_Positive_Number = Math.floor(random_Positive_Number)
document.write(`<center><h2>Floor value: ${floor_Positive_Number}</h2></center>`)
let ceil_Positive_Number = Math.ceil(random_Positive_Number)
document.write(`<center><h2>Ceil value: ${ceil_Positive_Number}</h2></center><br><hr>`)

//          Task 02

document.write(`<center><h1><u>Task 02</u></h1></center><br>`);

let random_Number_Negative = Math.random()*9-9;
document.write(`<center><h2>Number: ${random_Number_Negative.toFixed(5)}</h2></center>`);
let round_Number_Negative = Math.round(random_Number_Negative)
document.write(`<center><h2>Round off value: ${round_Number_Negative}</h2></center>`)
let floor_Number_Negative = Math.floor(random_Number_Negative)
document.write(`<center><h2>Floor value: ${floor_Number_Negative}</h2></center>`)
let ceil_Number_Negative = Math.ceil(random_Number_Negative)
document.write(`<center><h2>Ceil value: ${ceil_Number_Negative}</h2></center><br><hr>`)

//          Task 03

document.write(`<center><h1><u>Task 03</u></h1></center><br>`);

let number = prompt("Enter a number: ");
let absoluteValue = Math.abs(number);

document.write(`<center><h2>Absolute value of ${number} is ${absoluteValue}</h2></center><br><hr>`);

//          Task 04

document.write(`<center><h1><u>Task 04</u></h1></center><br>`);

let dice_Value = Math.floor(Math.random() *6);
document.write(`<center><h2>Random dice value: ${dice_Value}</h2></center><br><hr>`);

//          Task 05

document.write(`<center><h1><u>Task 05</u></h1></center><br>`);
let game = Math.ceil(Math.random()*2);
let started_Game = (game == 2) ? document.write(`<center><h2>${game}<br>Random coin value: Heads</h2></center><br><hr>`) : document.write(`<center><h2>${game}<br>Random coin value: Tails</h2><center><br><hr>`);

//          Task 06

document.write(`<center><h1><u>Task 06</u></h1></center><br>`);

let random_Number_0_100 = Math.floor(Math.random()*100);
document.write(`<center><h2>Random number between 1 to 100: ${random_Number_0_100}</h2></center><br><hr>`);

//          Task 07

document.write(`<center><h1><u>Task 07</u></h1></center><br>`);

let weightInput = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilogram): ");

let weight = weightInput.replace(/[^\d.]/g, "");
console.log(weight);
if (isNaN(weight)) {
  document.write(`<center><h2>Invalid input. Please enter a number.</h2></center><br><hr>`);
} else {
  document.write(`<center><h2>Your weight is: ${weight} kgs</h2></center><br><hr>`);
}

//          Task 08

 document.write(`<center><h1><u>Task 08</u></h1></center><br>`);

 let user_Prom = +prompt("Enter a number between 1 to 10");
 let random_Number_1_10 = Math.floor(Math.random()*10)+1;
 if (user_Prom == random_Number_1_10) {
   document.write(`<center><h2>Congratulations! You guessed the correct number.</h2></center><br><hr>`);
 }else if(isNaN(random_Number_1_10)){
    document.write(`<center><h2>Invalid input. Please enter a number between 1 to 10.</h2></center><br><hr>`);
 }
  else {
   document.write(`<center><h2>Try again!</h2></center><br><hr>`);
 }

 