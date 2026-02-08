//Objects

const employee = {
  id: "E102",
  name: "Jack",
  address: { city: "New York" },
};

const { id, name = "Rose" } = employee;

// console.log(id);
console.log(name);

// console.log(employee);
// console.log(salary);

//Arrays
const numbers = [10, 20, 30, 40];

//destructure by position
const [first, second] = numbers;
console.log(first);

//skip elements
const [, , third] = numbers;
console.log(third);

//with rest operator
const [x, y, ...rest] = numbers;
console.log(x);
console.log(y);
console.log(rest);
