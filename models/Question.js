const mongoose = require("./connection");

const QuestionSchema = new mongoose.Schema({
    question: String,
    answer: String,
    timestamp: { type: Date, default: Date.now }
});

const Question = mongoose.model("question", QuestionSchema);

module.exports = Question;