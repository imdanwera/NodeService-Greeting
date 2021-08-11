const express = require('express');

const app = express();

app.get('/hi', (req, res) => {
  res.send('Hello My World!')
})

app.listen(process.env.PORT || 3000)
module.export = app
