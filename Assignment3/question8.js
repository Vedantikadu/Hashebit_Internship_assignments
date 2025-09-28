
/*Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
Example - 456 - 4+5+6 = 15 - 1+5 = 6.*/
function repeatedSumOfDigits(num) {
    while (num >= 10) {  
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        num = sum;
    }
    return num;
}

console.log(repeatedSumOfDigits(456));  
console.log(repeatedSumOfDigits(9999)); 
console.log(repeatedSumOfDigits(12345));
