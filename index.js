let chalk = require('chalk');
const fs = require('fs');
const app = require('./src/app');

// port, specified in first argument
const port = process.argv[2];

// GET method on /bingo
app.get('/bingo', function(req, res) {
  fs.readFile('./src/numbers.txt', 'utf8', function(err, contents) {
    res.send(contents.split('\n').join(', ').slice(0, -2));
  });
});

// start server here
app.listen(port, function () {
  console.log(chalk.green('Hello web server'));
});
