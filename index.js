// Iteration 1: Names and Input
const hacker1 = "Charlie";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Hector";
console.log(`The navigator's name is ${hacker2}.`)


// Iteration 2: Conditionals
console.log(hacker1.length)
console.log(hacker2.length)

if(hacker1.length>hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters. `)
}



// Iteration 3: Loops
let hacker1Upper = '';

for (let i = 0; i < hacker1.length; i++) {
    hacker1Upper += hacker1[i].toUpperCase() + '';
};
console.log(hacker1Upper);


let hacker2Reverse = '';

for(let i = hacker2.length -1; i >= 0; i--){
  hacker2Reverse+=hacker2[i];
}
console.log(hacker2Reverse);


const hacker1Lower = hacker1.toLowerCase();
const hacker2Lower = hacker2.toLowerCase();

if(hacker1Lower<hacker2Lower){
  console.log(`The driver's name goes first.`)
}else if(hacker1Lower>hacker2Lower){
  console.log(`Yo, the navigator goes first.`);
}else{
  console.log(`What?! You both have the same name?`);
}