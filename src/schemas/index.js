const mongoose = require('../configuration/mongoose'),
  Schema = mongoose.Schema;

const schemas = {

  discountsSchema: new Schema({
    brand: String,
    threshold: Number,
    discount: Number
  }),

  productsSchema: new Schema({
    id: Number,
    brand: String,
    description: String,
    image: String,
    price: Number
  })

};

module.exports = schemas;