// Run code here in the context of Chapter 2
//for (let line = "#"; line.length < 8; line += "#")
  //console.log(line);
for (let hash="#";hash.length<8;hash += "#")
console.log(hash);

for (i=1;i<=10;i++)
console.log(i);


console.log("-------FIZZBUZZ---------");
// for (let number = 0; number <= 12; number += 2) {
//     console.log(number);
//   }

// let num=0;
// for (let num=1;num<=100;num++)
//     let output ="";
// if (num % 3 ==0){
//     console.log("Fizz");
// } else if (num % 5==0) {
//     console.log("Buzz");
// } else if (num % 5 && num % 3){
//     console.log("FizzBuzz");
// } else (num);

//expert answer
// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
//   }
console.log("----Expert Answer--------");
//exper 2 answer
for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)


console.log("-------Common Answer-------");
//answer I understand
for (i =1;i<=100;i++){
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0){
        console.log("Fizz");
    } else if (i % 5 == 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.log("-----checkerboard-----------");

// for (let hash="#";hash.length<4;hash += "#")

// console.log(hash);

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);