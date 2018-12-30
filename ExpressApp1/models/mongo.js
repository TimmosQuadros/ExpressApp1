var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/demoDb', function (err) {

    if (err) throw err;

    console.log('Successfully connected');

});

mongoose.Promise = global.Promise;

module.exports = {
    User: require('./users/user.model')
};