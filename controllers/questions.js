const express = require('express');
const Question = require('../models/Question');

const router = express.Router();

//SHOW ROUTE
router.get('/:id', (req, res) => {
  Question.findById(req.params.id)
    .then(question => {
      res.render('question', question);
    })
    .catch(console.error);
});

//INDEX ROuTE
router.get('/', (req, res) => {
  Question.find({})
    .then(question => {
      res.render('index', { question: question });
    })
    .catch(console.error);
});

//UPDATE ROUTE PT.2
router.put('/:id', (req, res) => {
  const answer = {
    answer: req.body.answer
  };
  Question.findOneAndUpdate({ _id: req.params.id }, answer, { new: true }).then(
    answer => {
      res.redirect('/question');
    }
  );
});

//CREATE ROUTE PT. 2
router.post('/', (req, res) => {
  Question.create(req.body)
    .then(question => {
      res.redirect('/question');
    })
    .catch(console.error);
});

module.exports = router;
