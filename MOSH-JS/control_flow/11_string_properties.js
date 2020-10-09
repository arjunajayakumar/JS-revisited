// Display string properties

let movie = {
    name:'a',
    releaseYear:2014,
    rating:4.6,
    director:'b'
}

stringProperties(movie)


function stringProperties(obj) {
    for(let value in obj) {
        if(typeof(obj[value]) === "string" ) {
            console.log(value, obj[value] );
        }
    }
}


