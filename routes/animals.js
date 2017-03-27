console.log("whose a goode boy")

// each route has own mini implementation of express

const { Router } = require('express')
const path = requrie('path'); // part of express

console.log("routing shtuff")

// usually says  const router = Router();
// being more specific helps find errors
const animalRouter = Router();


// below routes only run if requested user is a set as a farmer
// animalRouter.use(function (req, res, next) {
//   if (req.user === ' farmer') {
//     next()
//   } else {
//     res.status(403).send('Forbidden')
//   }
// }

animalRouter.get('/monkeys', (req, res, next) => {
  console.log("woah")
  console.log('MONNKEYSSSS!!')
  console.log('this ran at ' + req.requestedTime)

  // this is the file that is loaded when visiting url/monkeys
  // need path in order to get this to work cause node js is crazy sometimes
  res.sendFile(path.join(__dirname, '../public', 'monkeys.html'));
      // __dirname   says i am in the routes folder, equal to directory of where the file is
})

animalRouter.get('/chickens', (req, res, next) => {
  console.log("chicken page")

  res.send(`<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>`)
})


animalRouter.post('/chickens', (req, res, next) => {
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



module.exports = animalRouter;
