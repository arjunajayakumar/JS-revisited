// Break

// let i = 0;
// while (i <= 8) {
//   if (i === 5) break;
//   console.log(i);
//   i++;
// }

// Continue

let i = 0;
while (i <= 8) {
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i)
   i++;
}
