


// 4. Write a function to perform this. You are given two numbers n1 and n2. 
// You need to find the sum of the products of their corresponding digits. 
// So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfDigitProducts(n1, n2) {
    let str1 = n1.toString();
    let str2 = n2.toString();
    let maxLength = Math.max(str1.length, str2.length);
    str1 = str1.padStart(maxLength, '0');
    str2 = str2.padStart(maxLength, '0');
    let sum = 0;
    for (let i = 0; i < maxLength; i++) {
        sum += parseInt(str1[i]) * parseInt(str2[i]);
    }
    return sum;
}

console.log(sumOfDigitProducts(6, 34));   
console.log(sumOfDigitProducts(123, 45)); 
console.log(sumOfDigitProducts(56, 78));    
