/*
What's the Missing Letter?
Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).

If there are no missing letters in the string, return "No Missing Letter".

Examples
missingLetter("abdefg") ➞ "c"

missingLetter("mnopqs") ➞ "r"

missingLetter("tuvxyz") ➞ "w"

missingLetter("ghijklmno") ➞ "No Missing Letter"
Notes
The given string will never have more than one missing letter.
*/

function missingLetter(str) {
  const arrOfChars = str.toLowerCase().split("");
  let prevCharAsciiVal = arrOfChars[0].charCodeAt(0);

  for (let i = 1; i < arrOfChars.length; i++) {
    const currCharAsciiVal = arrOfChars[i].charCodeAt(0);

    if (currCharAsciiVal - prevCharAsciiVal > 1) {
      return String.fromCharCode(prevCharAsciiVal + 1);
    }

    prevCharAsciiVal = currCharAsciiVal;
  }

  return "No Missing Letter";
}

exports.solution = missingLetter;
