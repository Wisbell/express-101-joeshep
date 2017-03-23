'use strict';

console.log("Welcome to express!");


// Server - Creating a program that  accepts requests and return a response to those requests

const express = require('express');

const app = express();

let count = 0;

// Middleware

//  - Middleware is a fancy term for a function
//       that takes 3 arguments

// Example

const requestTime = (req, res, next) => {
  req.requestedTime = Date.now();
  next();
}

const printTime = (req, res, next) => {
  console.log(req.requestedTime)
}


// all of these are streams, next()

// You must use app.use to start call of stack

// on default it will run on every request
// app.use(requestTime)


// this sets up the default directory as the root project
// defaults to looking for an index.html file
app.use(express.static(__dirname + '/public'));
app.use(requestTime)

// define route that runs an anonymouse function
// when route is equal to string

// for .get, .post next() is always called

app.get('/monkeys', (req, res, next) => {
  console.log("woah")
  console.log('MONNKEYSSSS!!')
  console.log('this ran at ' + req.requestedTime)

  // this is the file that is loaded when visiting url/monkeys
  res.sendFile(__dirname + '/public/monkeys.html')
})

app.get('/chickens', (req, res, next) => {
  console.log("chicken page")

  res.send(`<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>`)
})


app.post('/chickens', (req, res, next) => {
  console.log('posting a form for a chicken')
  console.log(`
             \\
             (o>
          \\_//)
           \_/_)
            _|_
     `)
  console.log(`
             \\
             (o>
          \\_//)
           \_/_)
            _|_
     `)
})

app.use( (req, res) => {
  res.send('Where do you think you\'re going? We only have monkeys and chikens here.')
})

app.listen(3000, ()=>{
  console.log("Listening on port 3000")
})

setInterval(()=>{console.log("woah", count++)}, 1000)
