function first() {
    let breakFast = 'breakFast';
    return function second() {
        let lunch = 'Lunch'
        return function third() {
            let dinner = 'dinner';
            return `${breakFast} ${lunch} ${dinner}`
        }
    }
}

console.log(first()()())