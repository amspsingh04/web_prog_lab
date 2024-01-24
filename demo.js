var string='Hi'
function reverse(str){
let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
function fact(num){
fact=1
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
console.log(reverse(string))
console.log(fact(5))
console.log(palin('MOM'))
