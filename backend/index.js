const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 3030;
const app = express();

app.use(express.json());
app.use(cors());

const todoRoutes = require('./routes/todoRoutes');

mongoose
  .connect('mongodb://localhost/todolist')
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err.message));

app.use('/todos', todoRoutes);

app.listen(PORT, () => console.log('Server listen on ' + PORT));
