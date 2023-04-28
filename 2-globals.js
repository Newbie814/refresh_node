// GLOBALS;

// _dirname - path to current directory
// _filename - current file name
// require - function to use modules (CommonJS)
// process - info about env where the program is being executed

console.log(__dirname);
console.log('filename: ', __filename);
let amount = 0;

setInterval(() => {
  const newAmount = (amount += 1);
  console.log(newAmount);
}, 1000);
