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
console.log(hacker1.toUpperCase().split("").join(" "));
let reverseHacker2 = hacker2.split('').reverse().join('');
console.log(reverseHacker2);



