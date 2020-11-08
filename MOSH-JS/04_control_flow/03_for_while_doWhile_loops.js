let num = [1, 2, 4, 5, 7, 8];


for(let i = 0; i < num.length; i++) {
//  if(num[i] + 1 !== num[i + 1])
    // console.log('missing')
    console.log('1:',(num[i] + 1));
    console.log('2:',num[i + 1]);
    
}

// While loop
let i = 0;
while(i <= 8) {
    if((i % 2) === 0)
    console.log(i);
    i++
}

// do while
let i = 0;
do {
    if(i % 2 !== 0)
    console.log(i)
} while(i <= 5)
