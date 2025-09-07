import prompt from 'prompt-sync';
const prom=prompt();
//const prompt=require('prompt-sync')();

const name = prom('What is your name? ');
console.log(`Your name is ${name}.`);

const a = prom('enter first number ');
const b = prom('enter second number ');
const c=parseInt(a)
const d=parseInt(b)
const sum=c+d;
console.log(sum);




