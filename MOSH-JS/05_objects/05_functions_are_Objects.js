function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw')
    }
}

const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function () {
    console.log('draw')
}
`)

// This is what actaully happens inside the intrepretter when we create an object

// circle1.call({}, 1) - The new operator will internally create an empty object pass them to the call method 
// circle.apply({}, [1, 2, 3]) - can use this method instead of sending multiple arguments
const circle1 = new Circle(1)

const another = new Circle(1)