const mongoose = require('../configuration/mongoose'),
    {discountsSchema, productsSchema} = require('../schemas');

const models = {
    DiscountsSchema: mongoose.model('discounts', discountsSchema),
    ProductsSchema: mongoose.model('products', productsSchema)
};

module.exports = models;