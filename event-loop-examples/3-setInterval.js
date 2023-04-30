setInterval(() => {
  console.log('1 outside interval');
  setInterval(() => {
    console.log('2 inside interval');
  }, 1000);
}, 1000);

console.log('3 I will run first');
