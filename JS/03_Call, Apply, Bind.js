//Call - invoke a function directly by passing the reference which points to the 'this' variable inside the method
function greet(greeting, punctuation) {
  console.log(`${greeting} ${this.name} ${punctuation}`);
}

let person = {
  name: "Boby",
};

let employee = {
  name: "Raj",
};

greet.call(person, "Hello", "!!");

//Apply - same as call. only diff is take the second argument as array
greet.apply(employee, ["Hello", "!!"]);

//bind - gives the copy of the method which can be invoked later
let printName = greet.bind(person, "Hello", "");
printName();
