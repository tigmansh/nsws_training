const crypto = require('crypto');

let operation = process.argv[2];

let num1 = Number(process.argv[3]);
let num2 = Number(process.argv[4]);

let x;

// add, sub, mult, divide, sin, cos, tan, random

if(operation === 'add'){
    x = num1 + num2;
}

else if(operation === 'sub'){
    x = num1 - num2;
}

else if(operation === 'mult'){
    x = num1 * num2;
}

else if(operation === 'divide'){
    x = num1/num2;
}

else if(operation === 'sin'){
    x = Math.sin(num1);
}

else if(operation === 'cos'){
    x = Math.cos(num1);
}

else if(operation === 'tan'){
    x = Math.tan(num1);
}

else if(operation === 'random'){
    let length = 5;
    x = crypto.randomBytes(length).toString('hex');
}

else if(operation !== 'add' || operation !== 'sub' || operation !== 'mult' || operation !== 'divide' || operation !== 'sin' || operation !== 'cos' || operation !== 'tan' || operation !== 'random'){
    x = 'Invalid Operation !'
}

console.log(x);