async function brands(products) {
    let repeatedBrand = ""
    let brands = []
    products.forEach(product => {
        const { brand } = product
        if (repeatedBrand !== brand) {
            repeatedBrand = brand
            brands.push(brand)
        }
    });
    return brands
}

module.exports = brands