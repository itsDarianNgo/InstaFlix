const express = require('express')
const router = express.Router()
const axios = require('axios')
const moviesController = require('../controllers/movies') 

// router.get('/', moviesController.getMovies)
router.get('/', moviesController.getAPI)

module.exports = router
