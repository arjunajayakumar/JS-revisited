function evenOdd(limit) {
    for(let i = 1; i <= limit; i++) {
        // if(i % 2 === 0)
        // console.log(i, 'EVEN');
        // else {
        //     console.log(i, 'ODD');
        // }

        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}

evenOdd(10)