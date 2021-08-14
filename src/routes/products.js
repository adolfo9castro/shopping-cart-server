const { products } = require('../controllers');

/** express module: Framework for build API
* @constant {module}
*/
const express = require('express');

/** Router
 * @constant {function}
 */
const router = express.Router();

async function getProducts(req, res) {
    const data = req.body;
    try {
        const response = await products.productsFind(data);
        res.status(200).json(response);
    } catch (err) {
        console.log(`Failed processing. Error: ${JSON.stringify(err.message)}`);
        res.status(500).json('Internal error');
    }
}

async function getBrandsProducts(req, res) {
    const data = req.body;
    try {
        const response = await products.brandsFind(data);
        res.status(200).json(response);
    } catch (err) {
        console.log(`Failed processing data: ${JSON.stringify(req.body)} Error: ${JSON.stringify(err.message)}`);
        res.status(500).json('Internal error');
    }
}

//router.use(accessValidate);

router.route('/').post(getProducts);
router.route('/brands').post(getBrandsProducts);
module.exports = router;