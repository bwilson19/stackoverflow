const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/stack', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

module.exports = mongoose;
