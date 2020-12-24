let num1 = 100;

//basic math
console.log("**********BASIC MATH**********");
console.log(num1 + 25);
console.log(num1 - 100);
console.log(num1 * 100);
console.log(num1 / 1500);

console.log("*************ADDITIONAL MATH Operations****************");
console.log(num1 % 1500 );//remainder
console.log(++num1); //increment
console.log(--num1); //decrement

console.log("*************Math object****************");
console.log(Math.PI);
console.log(Math.sqrt(num1));

console.log("CONVERT-parseint");
//convert between numbers and strings
// parseInt();
// parseFloat();
// toString();

let num2='150';

console.log(parseInt('100'));
console.log(parseInt(num2));
console.log(parseInt('ABC'));
console.log(parseInt('0xF'));

console.log("CONVERT -parseFLOAT");
let flo1='1.50';
console.log(parseFloat('1.00'));
console.log(parseFloat(flo1));
console.log(parseFloat('ABC'));

//numbers after special characters are ignored
console.log(parseInt('1.5'));
console.log(parseInt('1+1'));
//template literals
console.log(parseInt(`${1+1}`));


console.log("CONVERT - Tostring");

let num3 = 150;
let flo2 = 1.50;

console.log(num3.toString());
console.log(flo2.toString());
console.log((100).toString());
