const regExp = /\S+\w+@\w+\S+\w+\.\w+/;
const email = 'srudyjj@gmail.com';
const emailE1 = 'srudyjj@@gmail.com';
const emailE2 = 'srud yjj @@gma il.com';
const emailE3 = 'srudyjj@gma.il.com';

console.log(email.match(regExp));
console.log(emailE1.match(regExp));
console.log(emailE2.match(regExp));
console.log(emailE3.match(regExp));

