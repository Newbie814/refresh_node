// method 1

// const { readFile } = require('fs');

// const getText = async (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, result) => {
//       if (err) {
//         console.log(err);
//         reject(err);
//       } else {
//         console.log(result);
//         resolve(result);
//       }
//     });
//   });
// };

// const start = async () => {
//   try {
//     const first = await getText('./content/first.txt');
//     const second = await getText('./content/second.txt');
//     console.log(first);
//     console.log(second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();
// ==================================================================================
// method 2
// const { readFile, writeFile } = require('fs');
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//   try {
//     const first = await readFilePromise('./content/first.txt', 'utf8');
//     const second = await readFilePromise('./content/second.txt', 'utf-8');
//     const third = await writeFilePromise(
//       './content/result-write-file-promisify.txt',
//       `This is awesome : ${first} ${second}`
//     );
//     console.log(first);
//     console.log(second);
//     console.log(third);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();
// ==================================================================================
// method 3
const { readFile, writeFile } = require('fs').promises;
const util = require('util');

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf-8');
    await writeFile(
      './content/result-write-file-promisify.txt',
      `This is awesome : ${first} ${second}`
    );
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();
