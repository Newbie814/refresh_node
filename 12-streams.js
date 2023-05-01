const { createReadStream } = require('fs');

// default 64kb
// last buffer - remainder
// can include an options object as a second argument
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

const stream = createReadStream('./content/big.txt');

stream.on('data', (result) => console.log(result));
