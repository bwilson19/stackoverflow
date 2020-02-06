const mongoose = require('../db/connection');
const moment = require('moment')

const time = moment().format('MM/DD/YYYY hh:mm A')

const QuestionSchema = new mongoose.Schema({
  question: String,
  description: String,
  answer: [{title:String}],
  timestamp: { type: String, default: time }
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
