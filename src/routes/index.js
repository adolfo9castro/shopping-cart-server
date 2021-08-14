const products = require('./products');
const discounts = require('./discounts');

/** express module: Framework for build API
* @constant {module}
*/
const express = require('express');

/** Router
 * @constant {function}
 */
const router = express.Router();

router.use('/discounts', discounts);
router.use('/products', products);

module.exports = router;
