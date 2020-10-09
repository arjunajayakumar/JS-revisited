// Count Truthy

function countTruthy(array) {
  let count = 0;
  for (let value of array)
    if (value) 
    count++;
    return count;
}

const array = [0, null, undefined, 4, 5];
console.log(countTruthy(array));
