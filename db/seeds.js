const Question = require('../models/Question');
const seedData = require('./seeds.json');

Question.remove({})
  .then(() => {
    return Question.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  });
