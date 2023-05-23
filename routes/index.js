const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const URL = require('./modules/URL-shortener')

router.use('/', home)
router.use('/', URL)

module.exports = router