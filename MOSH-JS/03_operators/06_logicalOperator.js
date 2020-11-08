// Logical AND (&&)

// Return true if both operands are TRUE
console.log(true && true);

let highIncome = true;
let goodCreditScore = true;
let isEligibleForLoan = (highIncome && goodCreditScore);

console.log(isEligibleForLoan);

// Logical OR (||)

// Returns true if one of the operands is true

let highIncome = true;
let goodCreditScore = true;
let isEligibleForLoan = (highIncome || goodCreditScore);
console.log(isEligibleForLoan);

// Logical NOT (!)
let highIncome = false;
let goodCreditScore = false;
let isEligibleForLoan = (highIncome || goodCreditScore);
console.log('Eligible',isEligibleForLoan);

let applicationREfused = !isEligibleForLoan;
console.log(applicationRefused);