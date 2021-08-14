const { discounts } = require('../controllers');

/** express module: Framework for build API
* @constant {module}
*/
const express = require('express');

/** Router
 * @constant {function}
 */
const router = express.Router();

async function getDiscounts(req, res) {
    const data = req.body;
    try {
        const response = await discounts(data);
        res.status(200).json(response);
    } catch (err) {
        console.log(`Failed processing data: ${JSON.stringify(req.body)} Error: ${JSON.stringify(err.message)}`);
        res.status(500).json('Internal error');
    }
}

//router.use(accessValidate);

router.route('/').post(getDiscounts);
module.exports = router;