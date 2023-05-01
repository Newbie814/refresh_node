const { readFile } = require('fs');

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(result);
        resolve(result);
      }
    });
  });
};

const runGetText = getText('./content/first.txt')
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

exports.runGetText = runGetText;
