console.log('name: ', name)
console.log('handle: ', handle)
console.log('getUser: ', getUser)

var name = "Tyler"
var handle = "@tylermcginnis"

function getUser() {
    return {
        name: name,
        handle: handle
    }

}

function first() {
    var name = "Jordyn"
    console.log(name)
}

function second() {
    var name = "Jake"
    console.log(name)
}

console.log(name)
var name = "Tyler"
first()
second()
console.log(name)