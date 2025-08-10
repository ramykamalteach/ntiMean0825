console.log("Hello, World!");

const fs = require('fs');

fs.readFile("file.txt", (err, data) => {
  if (err) throw err;
  console.log("File has been read  : " + data.toString());
});

console.log("This runs while file is being read");