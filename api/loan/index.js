
const app = require('../app')

/* module.exports = function (app) {
  console.log("inside")
  app.get('/loans', async (req, res, next) => {
    console.log("\n\n----here-----")
    const data = "loans"
    try {
      res.json(data)
    } catch (error) {
      next(error)
    }
    // next()
  })
  // other routes..
} */

app.get('/loan', (req, res) => {
  res.status(200).send({
      message: 'Hello world!'
  })
})

module.exports = app