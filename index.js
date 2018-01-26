let chalk = require('chalk');
const app = require('./src/app');

// port, specified in first argument
const port = process.argv[2];

// GET method on /bingo
app.get('/bingo', function(req, res) {
  res.end('Bingo');
});

// start server here
app.listen(port, function () {
  console.log(chalk.green('Hello web server'));
});
