
/*Q2) let str = 'I love my India'output expected = 'India my love I'
Write code for this.*/
let string = "I love my India";
let words = string.split(" ");
let reversedWords = words.reverse();
let reversedStr = reversedWords.join(" ");
console.log(reversedStr); // Output: "India my love I"
