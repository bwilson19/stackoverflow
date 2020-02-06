const express = require('express');
const Question = require('../models/Question');

const router = express.Router();

//INDEX ROuTE
router.get('/', (req, res) => {
  Question.find({})
    .then(question => {
      res.render('index', { question: question });
    })
    .catch(console.error);
});

// //UPDATE ROUTE
// router.get('/:id/edit', (req, res) => {
//   Todo.findById(req.params.id).then(todo => {
//     res.render('edit', todo);
//   });
// });

// //UPDATE ROUTE PT.2
// router.put('/:id', (req, res) => {
//   const complete = req.body.complete === 'on' ? true : false;
//   const todo = {
//     title: req.body.title,
//     complete: complete
//   };
//   Todo.findOneAndUpdate({ _id: req.params.id }, todo, { new: true }).then(
//     todo => {
//       res.redirect('/todos');
//     }
//   );
// });

// //SHOW ROUTE
// router.get('/:id', (req, res) => {
//   Todo.findById(req.params.id)
//     .then(todo => {
//       res.render('show', todo);
//     })
//     .catch(console.error);
// });

//CREATE ROUTE PT. 2
router.post('/', (req, res) => {
  Question.create(req.body)
    .then(question => {
      res.redirect('/question');
    })
    .catch(console.error);
});

// //DELETE ROUTE
// router.delete('/:id', (req, res) => {
//   Todo.findOneAndRemove({ _id: req.params.id }).then(() => {
//     res.redirect('/todos');
//   });
// });

module.exports = router;
