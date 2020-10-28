
setTimeout(() => console.log("logCall was Called"), 3000)


console.log('1')
setTimeout(function () { console.log("This function is called back") }, -1000)
console.log('3')

let students = [
    { name: "Mary", score: 90, school: "east" },
    { name: "James", score: 100, school: "east" },
    { name: "Steve", score: 85, school: "east" },
    { name: "Guil", score: 40, school: "west" },
    { name: "Rodger", score: 90, school: "east" },
    { name: "Sam", score: 95, school: "west" },
    { name: "Raichel", score: 75, school: "east" }
]

let processStudents = function (data, callback) {
    students.forEach((student, index) => {
        if (data[index].school.toLowerCase() === "east") {
            if (typeof callback === "function") {
                callback(data[index])
            }
        }
    })
}

processStudents(students, student => {
    if (student.score > 60) console.log(student.name, "Passed")

})

let determineTotal = function () {
    let total = 0;
    let count = 0;

    processStudents(students, student => {
        total = total + student.score
        count++
    })

    console.log("Total Score = " + total, "total Students = " + count)
}

determineTotal()