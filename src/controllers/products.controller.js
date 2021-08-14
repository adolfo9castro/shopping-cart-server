const { ProductsSchema } = require('../models');
const { brands } = require('../handlers')

async function productsFind(data) {
    return await ProductsSchema.find(data)
        .then(async function (response) {
            return response
        }).catch(e => {
            throw new Error(e)
        })
}

async function brandsFind(data) {
    let allProducts = await productsFind(data)
    let allBrands = await brands(allProducts)
    return allBrands
}

module.exports = { productsFind, brandsFind }