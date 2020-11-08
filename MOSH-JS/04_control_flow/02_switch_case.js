let role = 'guest';

switch(role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderate User');
        break;
    default:
        console.log('Unknown')    
}

// Same using if else

if(role === 'guest') 
console.log('Guest user');
else if(role === 'moderator')
console.log('Moderate user');
else
console.log('Unknown');