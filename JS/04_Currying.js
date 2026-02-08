//currying is the process of transforming a function that takes multiple arguments in to a
// a sequence of functions, each taking one argument

//with bind method

// let multiply = function (x, y) {
//   console.log(x * y);
// };

// let multiplyByTwo = function(y) {
//     let x = 2;
//     console.log(x * y)
// }

let multiplyByTwo = multiply.bind(this, 3);
multiplyByTwo(6);

//with function closures
const multiply = function () {
  return function (y) {
    console.log(x * y);
  };
};

function sum(a, b, c) {
  return a + b + c;
}

function curriedSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// console.log(curriedSum(2)(3)(4));

const list = [
  {
    id: 1,
    name: "Steve",
    email: "steve@example.com",
  },
  {
    id: 2,
    name: "John",
    email: "john@example.com",
  },
  {
    id: 3,
    name: "Pamela",
    email: "pam@example.com",
  },
  {
    id: 4,
    name: "Liz",
    email: "liz@example.com",
  },
];

function filterByName(list, name) {
  return list.filter(
    (function (nameToFilter) {
      // nameToFilter is declared at this point
      return function (item) {
        // item is declared here
        return item.name !== nameToFilter;
      };
    })(name)
  );
}
