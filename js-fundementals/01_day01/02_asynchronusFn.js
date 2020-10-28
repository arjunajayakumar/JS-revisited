// let test = function () {
//     console.log("start of code")
//     alert("Notice me!")
//     console.log("end of the code")
// }

// let test2 = function () {
//     console.log("End of the code")
// }

// test()
// test2()

// Convert this code in to asynchronus
// let test = function () {
//     setTimeout(() => {
//         console.log("start of code")
//         alert("Notice me!")
//         console.log("end of the code")
//     }, 2000)
// }

// let test2 = function () {
//     console.log("End of the code")
// }

// test()
// test2()

console.log('2');
setTimeout(() => {
    console.log('2')
}, 1000)
for (let i = 0; i <= 10000; i++) {
    console.log('Hi')
}
console.log('3')