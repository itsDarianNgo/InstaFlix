const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

// get movie categories
router.get('/trending', homeController.getTrending)
router.get('/toprated', homeController.getTopRated)
router.get('/action', homeController.getAction)
router.get('/comedy', homeController.getComedy)
router.get('/horror', homeController.getHorror)
router.get('/romance', homeController.getRomance)
router.get('/mystery', homeController.getMystery)
router.get('/sci-fi', homeController.getSciFi)
router.get('/western', homeController.getWestern)
router.get('/animation', homeController.getAnimation)
router.get('/tvmovie', homeController.getTvMovie)

// Search
router.post('/', homeController.postSearch)




// router.get('/trending', authController.getTrending)

module.exports = router