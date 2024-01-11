// code
let number1 = Math.floor(Math.random() * 100);
let str='Это нечетное число';
if (number1%2===0){
    str='Это четное число';
}
console.log(number1+':'+str);