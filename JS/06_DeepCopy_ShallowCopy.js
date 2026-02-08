//Shallow copy
const employee = {
  id: "E102",
  name: "Jack",
  address: {
    city: "New York",
  },
  salary: 50000,
};

// let shallowCopy = { ...employee };
// shallowCopy.address.city = "Rock";

console.log("employee", employee);
// console.log("newEmployee", shallowCopy);

const deepCopy = JSON.parse(JSON.stringify(employee));
deepCopy.address.city = "dknfkdj";
console.log("deepCopy", deepCopy);
