const { readFile } = require('fs');

console.log('1 start first task');

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log('2 completed first task');
});
console.log('3 starting next task');
