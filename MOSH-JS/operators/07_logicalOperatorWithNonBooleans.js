// If a javascript expression is not evaluated to boolen true or false, the intrepretter will evaluate it as truthy or falsy

// Falsy(false)
// undefined
// null
// 0
// false
// ''
// NaN

// If any of these are used in an expression, it is trated as false
//  Anything other than falsey is conidered as truthy

// Short circuting
// let userColor = 'red';
// let defaultColor = 'blue';

// console.log(userColor || defaultColor);

// In this case the 'userColor' is a truthy value so the intrepretter stops evaluating further value and we get 'red' as answer. this is called short circuting.

console.log('red' || true || 'blue');