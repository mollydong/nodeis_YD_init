const path = require('path');

// filename
console.log(__dirname); // print whole filename
console.log(path.basename(__filename)); // print path_demo.js

// directory name
console.log(path.dirname(__filename)); // directory

//file extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename).base); // base - property

// concatenate paths
// want to have a ..test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));

