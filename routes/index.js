var express = require('express');
var router = express.Router();

app.get('/', (req, res) => {
  res.send('GET request naar de homepage')
});

module.exports = router;
