const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Connected to ${db.name}`);
});