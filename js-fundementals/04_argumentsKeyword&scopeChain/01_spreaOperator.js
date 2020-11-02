// Using Apply
// function foo(x, y, z) {
//     console.log(x, y, z)
// }

// let args = [0, 1, 2]
// foo.apply(null, args)

// Using Spread operator
function foo(x, y, z) {
    console.log(x, y, z)
}

let args = [0, 3, 8]
foo(...args)