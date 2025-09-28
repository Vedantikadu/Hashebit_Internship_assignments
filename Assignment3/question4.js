
let string = "This is a sample string with more than twenty characters.";
let vowels = 'aeiouAEIOU';
let vowelCount = 0;
let consonantCount = 0;
for (let char of string) {
    if (vowels.includes(char)) {
        vowelCount++;
    } else if (char.match(/[a-zA-Z]/)) {
        consonantCount++;
    }
}

console.log("Number of vowels:", vowelCount);
console.log("Number of consonants:", consonantCount);