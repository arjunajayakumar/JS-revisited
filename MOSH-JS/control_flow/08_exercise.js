// Speed Limit 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> License suspended

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  const maxPoints = 12;

  if (speed < speedLimit + kmPerPoint) 
    console.log("OK");
   else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= maxPoints) console.log("License Suspended");
    else console.log("Points", points);
  }
}

checkSpeed(180);
