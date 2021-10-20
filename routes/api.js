const express = require('express');
const router = express.Router();

const testAction = require('../controller/api/test');

router.get('/', testAction);
 

module.exports = router ;