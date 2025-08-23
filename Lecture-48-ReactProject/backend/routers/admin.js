const router = require('express').Router()
const adminController = require('../controller/admin')

// router('/', adminController.getAdmin)
router.post('/add-restaurant', adminController.postAddRestaurant)
router.get('/restaurants', adminController.getRestaurants)

module.exports = router;