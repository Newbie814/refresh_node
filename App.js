// Modules
const person = require('./modules/names');

const sayHello = (name) => {
  console.log(`Hello there ${name}`);
};

sayHello('Sandra');
sayHello(person.person1);
sayHello(person.person2);
