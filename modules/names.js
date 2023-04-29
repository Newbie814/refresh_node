const person1 = 'Matt';
const person2 = 'Connor';

const showModule = () => {
  console.log('names.js module:', module);
};

// exports.person1 = person1;
// exports.person2 = person2;
// exports.showModule = showModule;

module.exports = { person1, person2, showModule };

// alternative syntax for exporting modules

module.exports.items = ['item1', 'item2'];

const person = {
  name: 'Matt',
};

module.exports.singlePerson = person;
