const express = require('express');
const router = express.Router();

const noteActions = require('../controller/api/notes');

router.get('/', noteActions.saveNote);
 

module.exports = router;