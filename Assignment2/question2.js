
//2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
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
console.log(calculator(5,8,'+'));
console.log(calculator(34,67,'-'));
console.log(calculator(2,69,'*'));
console.log(calculator(1000,5,'/'));
console.log(calculator(208,23,'%'));