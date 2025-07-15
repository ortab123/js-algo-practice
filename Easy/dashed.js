/*
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
*/

function dashed(string) {
  const vowels = "aeiouAEIOU";
  let dashedString = "";
  for (let letter of string) {
    dashedString += vowels.includes(letter) ? `-${letter}-` : letter;
  }

  return dashedString;
}

console.log(dashed("Carpe Diem"));
console.log(dashed("Fight for your right to party!"));

exports.solution = dashed;
