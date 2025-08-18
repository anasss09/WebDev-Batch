const Products = require('../model/products')
const {getPtoductCategoryWise} = require('../utils/library')

module.exports.getHome = async (req, res, next) => {
    try {
        let Product = await Products.find()
        Product = getPtoductCategoryWise(Product);
        res.render('index', {
            Product: Product
        })
    } catch(err) {
        next(err)
    }
}