const { Router } = require('express');
const { estimator } = require('../contoller/main');

const router = Router();

router.get('/on-covid-19', estimator);

module.exports = { router };
