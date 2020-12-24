//always use === checks for vaule equality with data type

//if statement logic

const status = 200;
if (status === 200) {
    console.log('OK!');
} else if (status === 400){
    console.log('Error!');
} else {
    console.log('Unknown status');
}

//Ternary (instant) if statement
const message = (status === 200) ? 'OK' : 'Error';
// if const message status 200, write "OK", else "Error"

//boolean logic 
// implicit false values
// const x = 0;
// if (x) {
//     console.log('x contains a value');
// }


const x = 0; //converts this to false
if (!x) {
    console.log('x contains *NO* value');
}

//switch (case) statements
//switch statements can only check for equality, not <, >, etc.
const status2 = 200;

switch (status2) {
    case 200:
        console.log('OK!');
        break;
    case 400:
    case 500:
        console.log('Error');
        break;
    default:
        console.log('Unknown value');
        break;
}

