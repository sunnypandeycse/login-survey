const mongoose = require('mongoose');
const keys = require('./keys');

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose
  .connect(keys.mongoURI)
 //mongoose.connect('mongodb+srv://sunny:sunny@cluster0.uffqg.mongodb.net/test')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
