
/*Q5) Write a function to replace wrong word with correct word in any sentance.Like this - correctfn(string, wrong, correct)
Use string.replace in function.*/
function Correctfn(sentence, wrong, correct) {
    
    return sentence.replace(wrong, correct);
}


let str = "I love Javascipt programming";
let result = Correctfn(str, "Javascipt", "JavaScript");

console.log(result); 

