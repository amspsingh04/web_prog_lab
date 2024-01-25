
var string='Hi'
function reverse(str){
let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
function fact(num){
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
function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function findMissingNumber(arr) {
    let n = arr.length + 1; // n is one more than the length of the array (due to missing number)
    let expectedSum = (n * (n + 1)) / 2; // Sum of all numbers from 0 to n
    let actualSum = arr.reduce((acc, num) => acc + num, 0); // Sum of all numbers in the array
    return expectedSum - actualSum; // The difference is the missing number
}
console.log(reverse(string))
console.log(fact(5))
console.log(palin('MOM'))
console.log(findMax([10,20,5,8,9]));
printNumbers();
console.log(arraySum([1,2,3,4,5])); 
console.log(findMissingNumber([1,2,3,4,5,7,8,9,10]));