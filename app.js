const express = require('express');

const app = express();

app.get('/hi', (req, res) => {
  res.send('Hello All World!')
})

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Greeting Service</h1>')
})

app.listen(process.env.PORT || 3000)
module.export = app
