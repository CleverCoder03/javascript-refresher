// Check if the number is greater than other number or not.

let num1 = 6;
let num2 = 10;

if (num1 > num2) {
  console.log("Num1 is greater than Num2");
} else {
  console.log("Num1 is NOT greater than Num2");
}

// Check if a string is equal to another string

let checName = "Senpai";
let username = "Senpai";

if (checName == username) {
  console.log("This name already exists");
} else {
  console.log("You can use this number");
}

// Check if a variable is a number or not

let balance = "500";

if (typeof balance === "number") {
  console.log("Yess, this is a number");
} else {
  console.log("No, this is not a number");
}

//Check if a boolean value is true or false

let isCoding = true;

if (isCoding) {
  console.log("Yes, Senpai is coding");
} else {
  console.log("No, Senpai is not coding");
}

// Check if an array is empty or not

let arr = [];

if (arr.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is NOT empty");
}
