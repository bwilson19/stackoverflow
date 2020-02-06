const questionController = require('./controllers/questions');
const express = require('express');
// const methodOverride = require('method-override');
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//MIDDLEWARE END

app.set('view engine', 'hbs');

// app.use(methodOverride('_method'));

app.use('/question', questionController); //auto includes /todos in routes
app.listen(4000, () => {
  console.log('app listening on port 4000');
});
