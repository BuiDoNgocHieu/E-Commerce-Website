const express = require('express');

const AuthAPI = require('../API/auth.api')

const router = express.Router();

router.use('/auth', AuthAPI);

module.exports = router;
