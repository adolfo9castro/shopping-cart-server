const { DiscountsSchema } = require('../models');

async function discountFind(data) {
    return await DiscountsSchema.find(data)
        .then(async function (response) {
            return response
        }).catch(e => {
            throw new Error(e)
        })
}

module.exports = discountFind