const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/stack', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

module.exports = mongoose;
