const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const intitializeDBConnection = async () => {
  try {
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connection) {
      console.log('Successfully connected to the database');
    }
  } catch (err) {
    console.log('Mongo connection failed', err);
  }
};
module.exports = intitializeDBConnection;