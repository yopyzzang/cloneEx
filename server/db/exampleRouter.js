const express = require('express');
const router = express.Router();

const controller = require('exampleController')


router.get('/',controller.show);

module.exports = router;
