/*
Create a function that takes the current day (e.g. "2019-09-30"), an array of date objects and returns the "current streak" (i.e. number of consecutive days in a row).

Examples
currentStreak("2019-09-23", [
 {
 date: "2019-09-18"
 },
 {
 date: "2019-09-19"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 3

currentStreak("2019-09-25", [
 {
 date: "2019-09-16"
 },
 {
 date: "2019-09-17"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 0
Notes
The array of dates is sorted chronologically.
The today parameter will always be greater than or equal to the last date in the array.
An empty array should return 0.
*/

function currentStreak(currentDay, dateArr) {
  if (dateArr.length === 0) {
    return 0;
  }
  if (dateArr.length < 2) {
    return 1;
  }

  let currentStreak = 0;
  for (let i = dateArr.length - 1; i >= 0; i--) {
    const arrDateStr = dateArr[i].date;

    if (currentDay === arrDateStr) {
      currentStreak++;
      currentDay = subtractOneDay(currentDay);
      continue;
    } else {
      break;
    }
  }

  return currentStreak;
}

function subtractOneDay(dateStr) {
  let dateObj = new Date(dateStr);
  dateObj.setDate(dateObj.getDate() - 1);
  return dateObj.toISOString().slice(0, 10);
}

exports.solution = currentStreak;
