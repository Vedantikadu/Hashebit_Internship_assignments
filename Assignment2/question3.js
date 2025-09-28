
//3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow.
function findTax(salary) {
    let tax = 0;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;

        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break;

        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break;

        case (salary > 1500000):
            tax = salary * 0.30;
            break;

        default:
            tax = "Invalid salary";
    }

    return tax;
}

console.log(findTax(750000)); 
console.log(findTax(600000)); 
console.log(findTax(120000000));