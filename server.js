const express = require('express')
const app = express()

const PORT = process.env.port || 5000

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res, next) => {
  res.status(200)
  res.send('index.html')
  next()
})

app.listen(PORT, () => { console.log(`Listening on ${PORT}`) })

module.exports = app
