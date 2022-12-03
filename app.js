const express = require('express');
const app = express();

// In-memory database to store tasks
const tasks = [];

// GET /tasks: Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks: Add a new task
app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.json(task);
});

// PUT /tasks/:id: Update an existing task
app.put('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const task = tasks.find(task => task.id === id);
  if (!task) {
    res.status(404).send('Task not found');
    return;
  }
  Object.assign(task, req.body);
  res.json(task);
});

// DELETE /tasks/:id: Delete an existing task
app.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const task = tasks.find(task => task.id === id);
  if (!task) {
    res.status(404).send('Task not found');
    return;
  }
  tasks = tasks.filter(task => task.id !== id);
  res.json(task);
});

app.listen(3000, () => {
  console.log('Task management app listening on port 3000');
});
