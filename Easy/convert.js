/*
Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

Examples
convert(1, 3) ➞ 3780

convert(2, 0) ➞ 7200

convert(0, 0) ➞ 0
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/

function convert(hours, minutes) {
  if (typeof hours !== "number" || typeof minutes !== "number") {
    return "✗ Error: Both inputs must be numbers.";
  }

  if (hours < 0 || minutes < 0) {
    return "✗ Error: Hours and minutes must be positive.";
  }
  let seconds = hours * 3600 + minutes * 60;
  return seconds;
}

exports.solution = convert;
