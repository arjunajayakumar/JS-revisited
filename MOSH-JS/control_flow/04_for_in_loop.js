// Object

person = {
    name:'Arjun',
    age:'35'
}

for(let key in person)
console.log(key, person[key]);


// Arrays

let colors = ['red', 'green', 'blue'];

for(let index in colors)
console.log(index, colors[index]);

// for of loop
for(let color of colors)
console.log(color)