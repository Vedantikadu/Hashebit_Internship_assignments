
//Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?
function variableScopes() {
  
  var a = 50;

  let b = 30;

  const c = 60;

  console.log("var:", a);
  console.log("let:", b);
  console.log("const:", c);
}

variableScopes();

//Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit(arr) {
  return arr[1]; 
}

console.log(getSecondFruit(fruits)); 

//Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.
function modifyArray(arr, newElement) {
  arr.push(newElement); 
  arr.pop();            
  return arr;
}

let numbers = [1, 2, 3];
console.log(modifyArray(numbers, 4)); 

//Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.
let nums = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
  return arr.map(num => num * num);
}

console.log(squareNumbers(nums)); 

//Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers
function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}

console.log(getOddNumbers([1, 2, 3, 4, 5, 6])); 

//Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.
let person = {
  name: "Neha",
  age: 22,
  occupation: "Engineer"
};

function greetPerson(p) {
  console.log(`Hello, my name is ${p.name}. I am ${p.age} years old and I work as a ${p.occupation}.`);
}

greetPerson(person);

//Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).
function rectangleArea(rect) {
  return rect.width * rect.height;
}

let rect = { width: 10, height: 5 };
console.log(rectangleArea(rect)); 

//Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().
function getObjectKeys(obj) {
  return Object.keys(obj);
}

let car = { brand: "Toyota", model: "Corolla", year: 2022 };
console.log(getObjectKeys(car)); 

//Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
console.log(mergeObjects(obj1, obj2)); 

//Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.
const num = [16, 45, 19, 72];
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of array:", sumArray(num));

