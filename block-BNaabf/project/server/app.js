// path
const path = require('path');
const indexPath = '../client/index.js';
var absolutePath = path.join(__dirname, '..', 'client/index.js');
console.log(absolutePath, indexPath);
