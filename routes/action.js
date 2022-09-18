const express = require('express')
const router = express.Router()
const axios = require('axios')
const actionController = require('../controllers/action') 

// router.get('/', moviesController.getMovies)
router.get('/', actionController.getAPI)


module.exports = router