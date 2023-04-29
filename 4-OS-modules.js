// Built-in Modules

// OS - Operating System
// PATH - File Paths
// FS - File System
// HTTP - Hypertext Transfer Protocol
// URL - Uniform Resource Locator
// EVENTS -
// UTIL

const os = require('os');

const version = os.version();

const mem = os.totalmem();

const uptime = os.uptime();

console.log('uptime: ', (uptime / 60 / 60).toFixed(2), 'hours');

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

// console.log(currentOS);

// Path Module

const path = require('path');
