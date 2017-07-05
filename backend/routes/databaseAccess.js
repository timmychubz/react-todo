const express = require('express');
const TodoItem = require('../models/TodoItem')

const router = express.Router();


router.post('/add', (req, res) => {
  const testTodo = new TodoItem({
    task: req.body.task
  })

  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
})

router.get('/all', (req, res) => {
  TodoItem.find()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
})

router.post('/remove', (req, res) => {
  TodoItem.findByIdAndRemove(req.body.id)
    .then(response => {
      res.send(req.body.id);
    })
    .catch(error => {
      res.send(error);
    })
})

router.post('/toggle', (req, res) => {

  TodoItem.findById(req.body.id)
    .then(response => {
      response.completed = !(response.completed);
      response.save()
        .then(response => {
          res.send(response);
        })
    })
    .catch(error => {
      res.send(error);
    })
})

module.exports = router;
