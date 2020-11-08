// Hour
//  If hour is between 6am and 12 pm: Good Morning
//  If hour is between 12pm and 6pm: Good afternoon
//  Otherwise Good evenig;

let hour = 10;
if (hour >= 10 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}

// MEthod w/o curly braces
let hour = 10;

if (hour >= 10 && hour < 12) 
  console.log("Good Morning");
 else if (hour >= 12 && hour < 18) 
  console.log("Good Afternoon");
 else
  console.log("Good Evening");

