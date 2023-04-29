// Modules
const person = require('./modules/names');
require('./modules/mind-grenade'); // modules are wrapped in a function and executed. Any function that is invoked in the module will be executed, even if it is not exported.

const sayHello = (name) => {
  console.log(`Hello there ${name}`);
};

sayHello('Sandra');
sayHello(person.person1);
sayHello(person.person2);
// console.log('app.js module:', module);
// person.showModule();

// console.log('items: ', person.items);
// console.log('single person: ', person.singlePerson);
