// Var -> function
// let -> block
// const -> block

// function sayHello() {
//     for(var i = 0; i < 5; i++) {
//         console.log(i)
//     }

//     console.log(i)
// }

// sayHello()

// function factorial(n) {
//     let value = 1;
//     for(let i = n; i > 0; i--) {
//         value = parseInt(value) * parseInt(i) ;
//     }

//     return value;
// }

// console.log(factorial(4));

function main(r) {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI
    // console.log('pi', PI)
    // Print the area of the circle:
    let area, perimeter;
    area = PI * r * r;
    console.log(area);
    
    // Print the perimeter of the circle:
    perimeter = 2 * PI * r;
    console.log(perimeter)
}

main(4)