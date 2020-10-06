// Read Write Execute
//  00000100 = 4
//  00000010 = 2
//  00000001 = 1

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
let myPermission = myPermission || writePermission;

let message = (myPermission & readPermission) ? 'yes': 'no';
console.log(message);