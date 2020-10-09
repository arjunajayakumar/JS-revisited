// Even or Odd

function evenOdd(limit) {
    for (let i = 1; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}

evenOdd(10)