const express = require('express')
const router = express.Router()
const detailsController = require('../controllers/details') 
const { ensureAuth } = require('../middleware/auth')

//Comment Routes - simplified for now
router.get('/', detailsController.getIndex)
router.get("/:id", detailsController.getDetail);


module.exports = router;
