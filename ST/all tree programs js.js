//// Variables
// var: Function-scoped variable
var name = "John";
console.log(name); // Output: John

// let: Block-scoped variable
let age = 30;
console.log(age); // Output: 30

// const: Block-scoped constant variable
const city = "New York";
console.log(city); // Output: New York

//// Data Types
// String
let str = "Hello, World!";
console.log(typeof str); // Output: string

// Number
let num = 42;
console.log(typeof num); // Output: number

// Boolean
let isTrue = true;
console.log(typeof isTrue); // Output: boolean

// Object
let person = { name: "Alice", age: 25 };
console.log(typeof person); // Output: object

// Array
let arr = [1, 2, 3];
console.log(typeof arr); // Output: object

// Null
let emptyValue = null;
console.log(typeof emptyValue); // Output: object

// Undefined
let notDefined;
console.log(typeof notDefined); // Output: undefined

//// Operators
// Arithmetic
let sum = 5 + 3;
console.log(sum); // Output: 8

// Assignment
let x = 10;
x += 5;
console.log(x); // Output: 15

// Comparison
console.log(5 == "5"); // Output: true
console.log(5 === "5"); // Output: false

// Logical
console.log(true && false); // Output: false
console.log(true || false); // Output: true

// Unary
let y = 5;
console.log(++y); // Output: 6

// Ternary (Conditional)
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult); // Output: Yes

//// Control Flow
// if statement
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Not an adult");
}

// switch statement
let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Banana");
    break;
  case "apple":
    console.log("Apple");
    break;
  default:
    console.log("Unknown fruit");
}

// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// do-while loop
let numCount = 0;
do {
  console.log(numCount);
  numCount++;
} while (numCount < 5);

//// Functions
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!

// Function expression
const square = function (n) {
  return n * n;
};
console.log(square(4)); // Output: 16

// Arrow function
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE executed");
})();

//// Scope
// Global scope
let globalVar = "I am global";

function checkScope() {
  // Local scope
  let localVar = "I am local";
  console.log(globalVar); // Output: I am global
  console.log(localVar); // Output: I am local
}
checkScope();

// Block scope
{
  let blockVar = "I am block scoped";
  console.log(blockVar); // Output: I am block scoped
}

// Lexical scope
function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(outerVar); // Output: I am outer
  }
  inner();
}
outer();

//// Arrays
// Array methods
let fruits = ["apple", "banana", "mango"];
fruits.push("orange");
console.log(fruits); // Output: ["apple", "banana", "mango", "orange"]

fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "mango"]

fruits.shift();
console.log(fruits); // Output: ["banana", "mango"]

fruits.unshift("grape");
console.log(fruits); // Output: ["grape", "banana", "mango"]

fruits.splice(1, 1, "kiwi");
console.log(fruits); // Output: ["grape", "kiwi", "mango"]

let slicedFruits = fruits.slice(1, 2);
console.log(slicedFruits); // Output: ["kiwi"]

let moreFruits = fruits.concat(["pear", "pineapple"]);
console.log(moreFruits); // Output: ["grape", "kiwi", "mango", "pear", "pineapple"]

// Array iteration
fruits.forEach((fruit) => console.log(fruit));

let upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits); // Output: ["GRAPE", "KIWI", "MANGO"]

let filteredFruits = fruits.filter((fruit) => fruit.startsWith("g"));
console.log(filteredFruits); // Output: ["grape"]

let totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0);
console.log(totalLength); // Output: 14

//// Objects
// Object properties
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};

// Dot notation
console.log(car.make); // Output: Toyota

// Bracket notation
console.log(car["model"]); // Output: Camry

// Object methods
let keys = Object.keys(car);
console.log(keys); // Output: ["make", "model", "year"]

let values = Object.values(car);
console.log(values); // Output: ["Toyota", "Camry", 2020]

let entries = Object.entries(car);
console.log(entries); // Output: [["make", "Toyota"], ["model", "Camry"], ["year", 2020]]

// Object destructuring
let { make, model, year } = car;
console.log(make, model, year); // Output: Toyota Camry 2020

//// Promises
// Promise states
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise fulfilled");
  } else {
    reject("Promise rejected");
  }
});

promise
  .then((message) => console.log(message)) // Output: Promise fulfilled
  .catch((error) => console.log(error))
  .finally(() => console.log("Promise settled"));

// Promise.all()
let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // Output: [3, 42, "foo"]
});

//// Asynchronous JavaScript
// Callbacks
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}

fetchData((data) => console.log(data)); // Output: Data fetched

// Promises
let fetchDataPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched with promise");
  }, 1000);
});

fetchDataPromise.then((data) => console.log(data)); // Output: Data fetched with promise

// Async/Await
async function fetchDataAsync() {
  let data = await fetchDataPromise;
  console.log(data); // Output: Data fetched with promise
}
fetchDataAsync();

//// Error Handling
// try...catch statement
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.message); // Output: Something went wrong
}

// throw statement
function checkAge(age) {
  if (age < 18) {
    throw new Error("Underage");
  }
  return "Adult";
}

try {
  console.log(checkAge(15));
} catch (error) {
  console.log(error.message); // Output: Underage
}

// JSON (JavaScript Object Notation)
let jsonString = '{"name": "John", "age": 30}';
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // Output: { name: "John", age: 30 }

let newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString); // Output: {"name":"John","age":30}

//// Modules
// import and export (Note: This requires a module system like ES6 modules or CommonJS)
export const greet = (name) => `Hello, ${name}!`;
import { greet } from "./module";
console.log(greet("Alice")); // Output: Hello, Alice!

//// DOM Manipulation
// Selecting elements
let element = document.getElementById("myElement");
console.log(element);

// Modifying elements
element.textContent = "New Content";

// Creating elements
let newElement = document.createElement("div");
newElement.textContent = "I am a new element";
document.body.appendChild(newElement);

//// Events
// Event listeners
element.addEventListener("click", () => {
  console.log("Element clicked");
});

// Event propagation
element.addEventListener("click", (event);