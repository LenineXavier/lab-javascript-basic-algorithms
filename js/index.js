// Iteration 1: Names and Input

let hacker1 = "Enzo";
console.log(`The drivers's name is ${hacker1} `)

let hacker2 = "Valentina";
console.log(`The navigator's name is ${hacker2} `)

// Iteration 2: Conditionals

    if (hacker1.length > hacker2.length) {
        console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
      } else if (hacker2.length > hacker1.length) {
        console.log(`It seems that the navigator has the longest name, it has, ${hacker2.length} characters.`);
      } else {
        console.log(`Wow you both have equally long names ,${hacker2.length} characters` );
      };


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
console.log(hacker1.toUpperCase().split("").join(" "));

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseHacker2 = hacker2.split('').reverse().join('');
console.log(reverseHacker2);
//3.3 Depending on the lexicographic order of the strings
//Ordem lexicográfica letras maíusculas precedem mínusculas 

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} ;


