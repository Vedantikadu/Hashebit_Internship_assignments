
//2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.


// 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. 
// Use switch inside function.
function calculator(num1,num2,operator){
    let result;

    switch(operator){
        case'+':
        result=num1+num2;
        break;

        case'-':
        result=num1-num2;
        break;

       case'*':
       result=num1*num2;
       break;

       case'/':
       result=num1/num2;
       break;
    
    default:
        return 'Invalid operator';}
        return result;
}
console.log(calculator(2,6,'+'));
console.log(calculator(4,3,'-'));
console.log(calculator(3,5,'*'));
console.log(calculator(10,5,'/'));
console.log(calculator(20,5,'%'));
