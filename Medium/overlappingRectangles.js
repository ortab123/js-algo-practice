/*
Create a function that returns the area of the overlap between two rectangles. The function will receive two rectangles, each with the coordinates of two of its opposite angles.

Examples
overlappingRectangles(
  [{ x: 2, y: 1 }, { x: 5, y: 5 }],
  [{ x: 3, y: 2 }, { x: 5, y: 7 }]
) ➞ 6

overlappingRectangles(
  [{ x: 2, y: -9 }, { x: 13, y: -4 }],
  [{ x: 5, y: -11 }, { x: 7, y: -2 }]
) ➞ 10

overlappingRectangles(
  [{ x: -8, y: -7 }, { x: -4, y: 0 }],
  [{ x: -5, y: -9 }, { x: -1, y: -2 }]
) ➞ 5

Notes
Coordinates can be positive or negative integers.
*/

function overlappingRectangles(rec1, rec2) {
  const x1Min = Math.min(rec1[0].x, rec1[1].x);
  const x1Max = Math.max(rec1[0].x, rec1[1].x);

  const x2Min = Math.min(rec2[0].x, rec2[1].x);
  const x2Max = Math.max(rec2[0].x, rec2[1].x);

  const y1Min = Math.min(rec1[0].y, rec1[1].y);
  const y1Max = Math.max(rec1[0].y, rec1[1].y);

  const y2Min = Math.min(rec2[0].y, rec2[1].y);
  const y2Max = Math.max(rec2[0].y, rec2[1].y);

  let commonXMin = 0;
  let commonXMax = 0;
  let commonYMin = 0;
  let commonYMax = 0;

  if (x1Min > x2Min) {
    commonXMin = x1Min;
  } else commonXMin = x2Min;

  if (x1Max > x2Max) {
    commonXMax = x2Max;
  } else commonXMax = x1Max;

  if (y1Min > y2Min) {
    commonYMin = y1Min;
  } else commonYMin = y2Min;

  if (y1Max > y2Max) {
    commonYMax = y2Max;
  } else commonYMax = y1Max;

  const width = commonXMax - commonXMin;
  const height = commonYMax - commonYMin;

  if (width <= 0 || height <= 0) {
    return 0;
  }

  return width * height;
}

exports.solution = overlappingRectangles;
