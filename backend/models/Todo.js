const mognoose = require('mongoose');

const TodoSchema = mognoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mognoose.model('Todo', TodoSchema);

module.exports = Todo;
