const mongoose = require('mongoose');
const { MONGO_HOST, MONGO_USER, MONGO_PASSWORD, MONGO_DATABASE } = process.env;
const connection = mongoose.connect(`mongodb://${MONGO_HOST}/${MONGO_DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

connection
    .then(() => {
        console.log(`mongodb connected successfully!`);
    })
    .catch(err => {
        console.log('err in mongodb connection', err.message);
    });