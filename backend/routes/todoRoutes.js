const router = require('express').Router();

const { default: mongoose, mongo } = require('mongoose');
const Todo = require('../models/Todo');

router.get('/', (req, res) => {
  Todo.find((err, data) => {
    if (err) {
      throw new Error(err);
    }
    res.json(data);
  });
});

router.post('/', (req, res) => {
  const todo = req.body;
  Todo.create(todo, (err, result) => {
    if (err) {
      throw new Error(err);
    }
    res.json(result);
  });
});

router.put('/:id', (req, res) => {
  const id = mongoose.Types.ObjectId(req.params);
  const todo = req.body;
  Todo.findOneAndUpdate(
    { _id: id },
    todo,
    { returnOriginal: false },
    (err, result) => {
      if (err) {
        throw new Error(err);
      }
      res.json(result);
    }
  );
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Todo.findOneAndRemove({ _id: id }, (err, result) => {
    if (err) {
      throw new Error(err);
    }
    res.end();
  });
});

module.exports = router;
