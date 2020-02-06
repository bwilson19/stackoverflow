const mongoose = require('../db/connection');

const QuestionSchema = new mongoose.Schema({
  question: String,
  answer: [],
  timestamp: { type: Date, default: Date.now }
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
