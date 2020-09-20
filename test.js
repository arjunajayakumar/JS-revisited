function add(num1, num2, callback) {
    let err = false;
    if (num1 == 0) {
        err = true;
    }
    callback(num1 + num2, err)
}

function multiply(num1, num2, callback) {
    callback(num1 * num2);
}

function div(num1, num2, callback) {
    callback(num1 / num2)
}

// add(14, 30, (sum, err) => {
//     if (err) {
//         console.log('Error!!!!')
//     } else {
//         console.log('Sum', sum)
//         multiply(sum, sum, (product) => {
//             console.log('Product', product)
//             div(product, 10, result => {
//                 console.log('Division', result);
//             })
//         })
//     }
// })


function add(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 == 0) {
            reject("Error!!!")
        } else {
            resolve(num1 + num2)

        }

    })
}

function multiply(num1, num2) {
    return new Promise((resolve, reject) => {
        resolve(num1 * num2)
    })
}

function div(num1, num2) {
    return new Promise((resolve, reject) => {
        resolve(num1 / num2)
    })
}

add(10, 20).then(sum => {
    console.log(sum);
    return multiply(sum, sum)
}).then(product => {
    console.log(product);
    return div(product, 14)
}).then(result => {
    console.log(result)
})
    .catch((err) => {
        console.log(err)
    })