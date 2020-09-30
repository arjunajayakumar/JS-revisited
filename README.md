# JS-revisited
### revisited javascript codes

### Modules
1. ES6 Modules
2. Parcel, Webpack & Babel
3. Export & Export Default

### Classes
1. Structuring a class
2. Constructors
3. Methods & Properties
4. Instatntiation
5. Extending classes

### Arrow functions
Scope and Lexical this

### Promises/Asynhronus requests
1. Create & receive promises
2. .then() and .catch() syntax
3. async & await
4. fetch api

### Destructuring

### Concept of components and state

### Spread operator
const userState = {
    name:'John'
}

const newUserState = {
    ...userState,
    age: 30
}

### High order Array functions
1. forEach()
2. map()
3. filter()

## OOPS Concepts

* OOP is not a programming language or tool its a style of programming or paradym
* OOPS combine a group of functions and related variables in to a unit. we call that unit a objects - this is called encapsulation
* OOP come to solve the complexity of procedural programming

### 4 pillars of OO programming
    1. Encapsulation
    2. Abstraction
    3. Inheritance
    4. Polymorphism


####  Encapsulation

##### Procedural programming
```
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary * (overtime * rate)
}
```

##### OO way of doing the same
```
let employee = {
    baseSalary: 30000,
    overtime:10,
    rate:20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate)
    }
};

console.log(employee.getWage())
```

##### This way of grouping functions and its related variables arre called encapsulation


#### Abstraction
* We can hide cetain properties and methods from outside lik in objects so for simple interface, reduce the impact change

#### Inheritance
#### Instead of redefining common properties the same can be inheritted to the elements like select, textbox, checkbox so as to eliminate redundant code

#### Polymorphism
* Help to Refactor large Ugly if else/ switchcase statements eg:render()


### Benefits
1. Encapsulation    - Reduce Complexity + increase reusability
2. Abstraction      - Reduce complexity + isolate impact of chnages
3. Inheritance      - Eliminate redundant code
4. Ploymorphism     - Refactor ugly switch/case statements


#### Value(Primitives) Vs Reference Types
##### Value Types(Primitives)
1. Number
2. String
3. Boolean
4. Symbol
5. undefined
6. null

#### Refernce Types
1. Object
2. Function
3. Array

##### Primitives
```
// let x = 10;
// let y = x;

// x = 20;

output:
x = 20;
y = 10;
```
* In the case of primitives the actual value is copied to the variable. so that if we reassign the value of the variable, it will not make any chanes to the  copied variable.

##### Reference
```
let x = {value:10};
let y = x;

x.value = 20;

output
x  = {value:20}
y  = {value: 20}
```

* In the case of refernce types the actual variable is copied to a different location and the address of that location is copied to the second variable ao that when we change the first variable it will automatically chnages the value of the second variable because they both are pointed to the same refrence/address

### Asynchronus Javascript
