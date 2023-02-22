console.log('Celsius to Fahreinheit');

const c2f = (value)=> ((value *(1.8))+(32)).toFixed(2);

console.log(c2f(process.argv[2]));
