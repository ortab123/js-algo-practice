/*
Create a function that converts Celcius to Fahrenheit and vice versa.

Examples
convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error"
Notes
Round to the nearest integer.
If the input is incorrect, return "Error".
*/

function convert(degreeStr) {
  if (degreeStr.includes("°C")) {
    const extractNumCel = parseInt(degreeStr);
    const fahrenheitDeg = Math.round(extractNumCel * 1.8 + 32);
    return fahrenheitDeg.toString() + "°F";
  } else if (degreeStr.includes("°F")) {
    const extractNumFahr = parseInt(degreeStr);
    const celciusDeg = Math.round((extractNumFahr - 32) * (5 / 9));
    return celciusDeg.toString() + "°C";
  } else return "Error";
}

exports.solution = convert;
