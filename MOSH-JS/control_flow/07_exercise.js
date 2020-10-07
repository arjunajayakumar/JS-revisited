// Max of two numbers
// function max(a, b) {
//  return (a > b) ? a : b;
// }

// console.log(max(7,3));

// Landscape or Not
// function isLandscape(width, height) {
//     return (width > height);
// }

// console.log(isLandscape(800,600))

// let x = Array(3)
// console.log(x == ',,');

// Fizz Buzz
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 & 5 => FizzBuzz
// Not divisible by 3 & r => number
// Not a number => not a number

function fizzBuzz(number) {
    if(typeof number !== 'number')
    return NaN;

    if((number % 3 === 0) && (number % 5 === 0))
    return "FizzBuzz";

    if(number % 3 === 0)
    return "Fizz";

    if(number % 5 === 0)
    return "Buzz";
    
    return number; 
}

console.log(fizzBuzz(true))


