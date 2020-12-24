//var is function scoped variable
var hello = "VAR-Hello";
console.log(hello);

hello = "VAR-Hello World!";
console.log(hello);


// let
if (true){
  //can't use variable before defined it, this won't work
 //   console.log(world);
    let world = "LET-Hello World"
    console.log(world);
}
//let can be renamed
world="LET-2";
console.log(world);

//this won't work b/c has to be defined within the scope
//console.log(world);


// const
const aaron = "AAron";
console.log(aaron);

//can't rename const, can't be reassigned
//aaron="Aaron Powell";

