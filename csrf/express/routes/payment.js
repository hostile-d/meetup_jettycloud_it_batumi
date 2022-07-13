const express = require('express');
const router = express.Router();
const makePayment = require('../utils/mock');

router.post('/', function (
    req,
    res
) {
    const {session, body: {account, amount}} = req;
    const csrfToken = req.get('X-CSRF-Token');

    if (!csrfToken) {
        return res.status(401).json({error: 'CSRF token missing.'});
    }

    if (!session.csrfToken) {
        return res.status(401).json({error: 'No CSRF token recorded in your session.'});
    }

    if (session.csrfToken !== csrfToken) {
        return res.status(401).json({error: 'Invalid CSRF token.'});
    }

    makePayment({account, amount});
    res.status(200).json({success: true, payment: {account, amount}});
});

module.exports = router;
