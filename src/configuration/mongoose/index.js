/** mongoose module: Config for connect to data base
* @constant {module}
*/
const mongoose = require('mongoose');

const {
    url,
    user,
    pass,
    useNewUrlParser
} = require('./connections')

mongoose.connect(url, {
    useNewUrlParser: useNewUrlParser,
    useCreateIndex: true,
    useUnifiedTopology: true,
    user: user,
    pass: pass
})
    .then(() => {
        console.log(`👍 Established connection `);
    })
    .catch(err => {
        console.log(`👎 ${err}`);
    })


module.exports = mongoose;