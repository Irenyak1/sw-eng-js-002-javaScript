// 5 if statements
let x = 10;
let y = 5;

// if example 1
if (x > y) {
  console.log("x is greater than y");
}

// if example 2
if (x === y) {
  console.log("x is equal to y");
} else {
  console.log("x is not equal to y");
}

// if example 3
if (x < y) {
  console.log("x is less than y");
} else if (x > y) {
  console.log("x is greater than y");
} else {
  console.log("x is equal to y");
}

// if example 4
if (x > 0 && y > 0) {
  console.log("Both x and y are positive");
} else if (x > 0 || y > 0) {
  console.log("Either x or y is positive");
} else {
  console.log("Both x and y are non-positive");
}

// if example 5
let Firstname = "Janet";
if (Firstname === "Janet") {
  console.log("Hello, Janet!");
} else if (Firstname === "Jonathan") {
  console.log("Hello, Jonathan!");
} else {
  console.log("Hello, stranger!");
}


// 5 switch cases

// switch case example 1
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's Monday!");
    break;
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
  case "Wednesday":
    console.log("It's Wednesday!");
    break;
  case "Thursday":
    console.log("It's Thursday!");
    break;
  case "Friday":
    console.log("It's Friday!");
    break;
  default:
    console.log("It's a weekend day!");
}

// switch case example 2
let num = 3;

switch (num) {
  case 1:
    console.log("The number is 1");
    break;
  case 2:
    console.log("The number is 2");
    break;
  case 3:
    console.log("The number is 3");
    break;
  default:
    console.log("The number is not 1, 2, or 3");
}

// switch case example 3
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("It's an apple");
    break;
  case "banana":
    console.log("It's a banana");
    break;
  case "orange":
    console.log("It's an orange");
    break;
  default:
    console.log("It's a different fruit");
}

// switch case example 4
let month = 2;

switch (month) {
  case 1:
  case 2:
  case 3:
    console.log("It's the first quarter of the year");
    break;
  case 4:
  case 5:
  case 6:
    console.log("It's the second quarter of the year");
    break;
  case 7:
  case 8:
  case 9:
    console.log("It's the third quarter of the year");
    break;
  case 10:
  case 11:
  case 12:
    console.log("It's the fourth quarter of the year");
    break;
  default:
    console.log("Invalid month");
}

// switch case example 5
let colors = ["red", "blue", "green"];
let index = 2;
switch (colors[index]) {
  case "red":
    console.log("The color is red");
    break;
  case "blue":
    console.log("The color is blue");
    break;
  case "green":
    console.log("The color is green");
    break;
  default:
    console.log("Unknown color");
}

// Switch case example for arrays
let fruits = ["mangoes", "apples", "bananas", "oranges", "pineapples"]
let fruit1 = 5;
// let fruit1 = "mangoes";
// let fruit1index = fruits.indexOf(fruits)
switch(fruits[fruit1]){
    // case 0:
    case "mangoes":
    console.log("They are mangoes");
        break;
    // case 1:
    case "pineapples":
        console.log("They are pineapples");
        break;
    // case 2:
    case "oranges":
        console.log("They are oranges");
        break;
    // case 3:
    case "bananas":
        console.log("They are bananas");
        break;
    // case 4:
    case "apples":
        console.log("They are apples")
        break;
    default:
        console.log("fruit not recognized");
}
