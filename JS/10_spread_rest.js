const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];

// console.log(numbers);
// console.log(newNumbers);

// modifying object using spread operator
const employee = { id: "E102", name: "Jack", address: { city: "New york" } };
const updatedEmployee = { ...employee, salary: 50000 };

//employee.address.city = "LA" //mutate original object

//using spread
const modifiedemployee = {
  ...employee,
  address: { ...employee.address, city: "LA" },
};
// console.log(employee);
// console.log(modifiedemployee);

//using desturucting
const { address, ...rest } = employee;
const empUpdated = { ...rest, address: { ...address, city: "SA" } };

console.log(employee);
console.log(empUpdated);
