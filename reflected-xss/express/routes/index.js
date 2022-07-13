var express = require('express');
var router = express.Router();

router.get('/results', (req, res) => {
  res.json({title: `Search results for ${req.query.search}`,})
});

module.exports = router;
