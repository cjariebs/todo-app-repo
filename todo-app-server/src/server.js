'use strict';
(() => {
  const express = require('express');
  const app = express();
  const port = 3999;

  const _db = {
    todoList: [
      {id: 1, text: 'lorem ipsum'},
      {id: 2, text: 'dolor sit amet'},
    ],
  };

  app.use(express.json());

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
  });

  app.get('/', (req, res) => res.send('hello world'));

  app.get('/todo', (req, res) => {
    res.json(_db.todoList);
  });

  app.post('/todo/add', (req, res) => {
    const newId =
      _db.todoList.length > 0
        ? _db.todoList[_db.todoList.length - 1].id + 1
        : 1;
    const newTodo = {
      id: newId,
      text: req.body.text,
    };
    _db.todoList.push(newTodo);
    console.log(_db.todoList);

    res.json(newTodo);
  });

  app.post('/todo/remove/:id', (req, res) => {
    console.log(`removing ${req.params.id}`);
    _db.todoList = _db.todoList.filter(i => i.id != req.params.id);

    console.log(_db.todoList);
    res.json(_db.todoList);
  });

  app.listen(port, () => console.log(`todo-server running on port ${port}`));
})();
