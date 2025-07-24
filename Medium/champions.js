/*
Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded, and returns the team name with the highest number of points. If two teams have the same number of points, return the team with the largest goal difference.
How to Calculate Points and Goal Difference
team = {name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
Goal Difference = scored - conceded = 88 - 20 = 68
Examples
champions([
 {
 name: "Manchester United",
 wins: 30,
 loss: 3,
 draws: 5,
 scored: 88,
 conceded: 20,
 },
 {
 name: "Arsenal",
 wins: 24,
 loss: 6,
 draws: 8,
 scored: 98,
 conceded: 29,
 },
 {
 name: "Chelsea",
 wins: 22,
 loss: 8,
 draws: 8,
 scored: 98,
 conceded: 29,
 },
])
➞ "Manchester United"
*/

function champions(arrOfFootballClubs) {
  let winningTeam = null;
  let highestPoints = 0;
  let bestGoalDiff = 0;

  for (let team of arrOfFootballClubs) {
    const points = calculatePoints(team);
    const goalDiff = calculateGoalDifference(team);

    if (!winningTeam || points > highestPoints) {
      winningTeam = team;
      highestPoints = points;
      bestGoalDiff = goalDiff;
    } else if (points === highestPoints) {
      if (goalDiff > bestGoalDiff) {
        winningTeam = team;
        bestGoalDiff = goalDiff;
      }
    }
  }

  return winningTeam.name;
}

calculatePoints = (team) => {
  return 3 * team.wins + team.draws;
};

calculateGoalDifference = (team) => {
  return team.scored - team.conceded;
};

exports.solution = champions;
