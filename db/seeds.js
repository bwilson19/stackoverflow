const Question = require('../models/Question');
const seedData = require('./seeds.json');

Question.deleteMany({})
  .then(() => {
    return Question.collection.insertMany(seedData);
  })
  .then(() => {
    process.exit();
  });
