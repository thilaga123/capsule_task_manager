module.exports = (app) => {
 const tasks = require('../controllers/task.controller.js');

 // Create a new task
 app.post('/tasks', tasks.create);

 // Retrieve all Tasks
 app.get('/tasks', tasks.findAll);

 // Retrieve a single Task with taskId
 app.get('/tasks/:taskId', tasks.findOne);

 // Update a Task with taskId
 app.put('/tasks/:taskId', tasks.update);

 // Delete a Task with taskId
 app.delete('/tasks/:taskId', tasks.delete);
}