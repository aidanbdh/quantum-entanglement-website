const app = require('express')()

const PORT = process.env.port || 5000

app.get('/', (req, res) => {
  res.status(200).send()
})

app.listen(PORT, () => { console.log(`Listening on ${PORT}`) })

module.exports = app
