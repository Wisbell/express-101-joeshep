'use strict';

console.log("Welcome to express!");


// Server - Creating a program that  accepts requests and return a response to those requests

require('dotenv').config() // npm install --save dotenv
const express = require('express');
const app = express();


// route modules
const animalRoutes = require('./routes/animals')


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
app.use(animalRoutes)
  // these three uses are middlware that is run against every request

// define route that runs an anonymouse function
// when route is equal to string

// for .get, .post next() is always called


app.use( (req, res) => {
  res.send('Where do you think you\'re going? We only have monkeys and chikens here.')
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`)
})

// setInterval(()=>{console.log("woah", count++)}, 1000)
