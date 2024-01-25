
var string='Hi'
function reverse(str){
let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
function fact(num){
let fact = readline.question("Enter number: ")
for(let i=1;i<=num;i++){
fact*=i
}
return fact;
}
function palin(str){
if(str == reverse(str)){
return "Palindrome"
}
else
return "Not a Palindrome"
}
function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
function printNumbers() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FlipFlop");
        } else if (i % 3 === 0) {
            console.log("Flip");
        } else if (i % 5 === 0) {
            console.log("Flop");
        } else {
            console.log(i);
        }
    }
}


console.log(reverse(string))
console.log(fact(5))
console.log(palin('MOM'))
console.log(findMax([10,20,5,8,9]));
printNumbers();
