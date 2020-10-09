

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