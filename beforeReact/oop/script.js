
// Objects
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function () {
//         console.log('draw');
//     }
// };

// circle.draw();

// Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log('draw');
//         }
//     }; 
// }

// const circle = createCircle(1);
// circle.draw()

// Constructor Function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw')
//     }
// }

// const another = new Circle(1)

// new keyword will create an empty object and set the scope of 'this' to the created function and finally return the object from the function
// If we donot use new key word 'this' will point to the global/window object that may make modify the values in other objects in future

// Constructor property







// Value vs reference

// let x = 10;
// let y = x;

// x = 20;

// let x = {value:10};
// let y = x;

// x.value = 20;

// let number = 10;
// function increase (number) {
//     number++;
// }

// increase(number);
// console.log(number)

// Adding / Removing Properties


// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw')
//     }
// }

// const circle = new Circle(10)

// Adding a property
// circle.location = {x: 1};
// circle['location'] = { x:1};

// Removing a property
// delete circle.location


// Enumerating property
// for(let key in circle) {
//     if(typeof circle[key] !== 'function')
//     console.log(key, circle[key])
// }

// const keys = Object.keys(circle)
// console.log(keys)

// if('radius' in circle) {
//     console.log('radius in circle')
// }

// Abstraction

function Circle(radius) {
    this.radius = radius;
    this.defaultLocation = {x:0, y:0};
    this.computeOptimumLocation = function() {
        
    }
    this.draw = function() {
        this.computeOptimumLocation();
        console.log('draw')
    };
          
}

const circle = new Circle(10);
circle.computeOptimumLocation();
circle.draw;
