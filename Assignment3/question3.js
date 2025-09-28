
/*Q3) let string = 'INDIA'output = 'INDONESIA'
Use array.splice*/
let string = "INDIA";

let array = string.split(""); 
array.splice(3, 2, "O", "N", "E", "S", "I", "A");  
let output = array.join("");

console.log(output); 
