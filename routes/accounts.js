var express = require('express');
var router = express.Router();

app.get('/accounts', (req, res) => {
  res.json(accounts);
});

module.exports = router;
