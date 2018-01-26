let chalk = require('chalk');
const fs = require('fs');
const app = require('./src/app');

// port, specified in first argument
const port = process.argv[2];

// GET method on /bingo
app.get('/bingo', function(req, res) {

  // Reading numbers.txt
  fs.readFile('./src/numbers.txt', 'utf8', function(err, contents) {

    // Parsing numbers.txt and transforming it
    let numbers = contents.split('\n').join(', ').slice(0, -2);

    // retrieving the parameter
    let myNumbers = req.query.mynumbers;

    // Sending the right answer
    if (myNumbers == undefined){
      res.send('The bingo game is already started and known numbers are '+numbers);
    // Adding space after each comma to myNumbers to match the bingo numbers pattern string
    } else if (myNumbers.replace(/,/g,', ') == numbers){
      res.send('Bingo');
    } else {
      res.send(`The bingo game is already started, sorry your numbers
      doesn't match with known numbers ${numbers} ; so you can not say Bingo`);
    }
  });
});

// start server here
app.listen(port, function () {
  console.log(chalk.green('Hello web server'));
});
