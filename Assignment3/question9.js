
//Q9) Write a function to count the number of words in a paragraph.
function countWords(paragraph) {
    
    let words = paragraph.trim().split(/\s+/);
    return words.length;
}

let para = "I love my India.   It is a great country!";
console.log(countWords(para));  