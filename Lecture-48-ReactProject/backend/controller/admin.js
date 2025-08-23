const Restaurant = require('../model/restaurant')

module.exports.postAddRestaurant = async (req, res, next) => {
    const { name, location, image } = req.body;
    try {
        let newRestaurant = await Restaurant.create({
            name,
            location,
            image
        })

        res.status(200).json({
            message: "Restaurant Added successfully",
            newRestaurant
        })
    } catch(err) {
        res.status(400).json({
            message: "Not added Restaurant currently"
        })
    }
}

module.exports.getRestaurants = async (req, res, next) => {
    try{
        let restaurants = await Restaurant.find()
        res.status(200).json({
            message: "Restaurants List",
            restaurants
        })
    } catch(err) {
        res.status(400).json({
            message:"Restaurant not Found"
        })
    }
}