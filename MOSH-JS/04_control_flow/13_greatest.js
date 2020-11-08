let marks = [80, 65, 78]

console.log(calculateGrade(marks))


function calculateGrade(mark) {
    const average = calculateAverage(mark);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'A';

}

function calculateAverage(array) {
    let totalMarks = 0;
    for (let value of array)
        totalMarks += value;
    return totalMarks / array.length;
}


