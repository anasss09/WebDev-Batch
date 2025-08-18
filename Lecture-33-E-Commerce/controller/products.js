const products = require('../model/products')

module.exports.getAdminHomePage = (req,res,next) => {
    res.render('admin/home')
}

module.exports.postProductAdd = async (req, res, next) => {
    const {name, price, description, seller, imageUrl } = req.body
    await products.create({
        name,
        price,
        description,
        seller,
        imageUrl
    })
    res.redirect('/admin/products/all')
}

module.exports.getProductAll = async (req, res, next) => {
    let Product = await products.find()

    let data = {}
    Product.forEach(product => {
        let arr = data[product.category] || []
        arr.push(product)
        data[product.category] = arr
    })

    res.render('admin/product-list', {
        Product: data
    })
}

module.exports.getProductAdd = (req,res) => {
    res.render('admin/product-add')
}

module.exports.getProductsupdate =async (req,res) => {
    const {id} = req.params
    let Product = await products.findById(id)
    res.render('admin/update-products', {
        Product
    })
}

module.exports.postProductUpdate = async (req, res, next) => {
    const {name, price, description, seller, imageUrl, id } = req.body    
    try{
        let Product = await products.findById(id)
        Product.name = name,
        Product.price = price,
        Product.description = description,
        Product.seller = seller,
        Product.imageUrl = imageUrl
        await Product.save()
        res.redirect('/admin/products/all')
    }catch(err) {
        console.log(err);        
    }
}

module.exports.getProductDelete = async (req,res) => {
    const { id } = req.params
    await products.deleteOne({_id: id})
    res.redirect('/admin/products/all')
}