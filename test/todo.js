// todo.js

const tasks = [];

function addTask(task) {
  tasks.push(task);
}

function removeTask(task) {
  const index = tasks.indexOf(task);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

module.exports = { tasks, addTask, removeTask };
