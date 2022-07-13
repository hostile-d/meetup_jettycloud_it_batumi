const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');




router.get('/', function(req, res) {
  const csrfToken = req.csrfToken();
  req.session.csrfToken = csrfToken;
  res.status(200).json({ csrfToken });
});

module.exports = router;
