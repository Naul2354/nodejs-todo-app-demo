const Todo = require("../model/todos");
const { validationResult } = require('express-validator');
// Show All Documents || Home page
exports.findAllTodo = async function (req, res) {
  const todos = await Todo.find({});
  res.render("index", {
    title: "Node JS Todo App",
    layout: "layouts/mainLayout",
    todos,
  });
};

exports.addTodoRoutes = function (req, res) {
  res.render("add-todo", {
    title: "Add Todo",
    layout: "layouts/mainLayout",
  });
};

// Add new todo
// exports.addTodo = async function (req, res) {
//   try {
//     const existingTodo = await Todo.findOne({
//       action: req.body.action.toLowerCase(),
//     });

//     if (existingTodo) {
//       return res.render('add-todo', {
//         title: 'Add Todo',
//         layout: 'layouts/mainLayout',
//         error: 'Task already have , please add another task!',
//       });
//     }

//     // Create a new todo and save it to the database
//     const newTodo = new Todo({
//       action: req.body.action,
//     });

//     await newTodo.save();

//     res.redirect('/');
//   } catch (error) {
//     console.error('Error adding todo:', error);
//     res.status(500).send('Internal Server Error');
//   }
// };


exports.addTodo = async function (req, res) {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Validation errors found, render the add-todo page with error messages
      return res.render('add-todo', {
        title: 'Add Todo',
        layout: 'layouts/mainLayout',
        error: 'No description. Please enter a task.',
      });
    }

    const existingTodo = await Todo.findOne({
      action: req.body.action.toLowerCase(),
    });

    if (existingTodo) {
      // Task with the same description already exists
      return res.render('add-todo', {
        title: 'Add Todo',
        layout: 'layouts/mainLayout',
        error: 'Task already exists. Please add another task.',
      });
    }

    // Create a new todo and save it to the database
    const newTodo = new Todo({
      action: req.body.action,
    });

    await newTodo.save();

    // Redirect to the main page or perform the necessary action
    res.redirect('/');
  } catch (error) {
    console.error('Error adding todo:', error);
    res.status(500).send('Internal Server Error');
  }
};





exports.editTodoRoutes = async function (req, res) {
  const todo = await Todo.findById(req.params.id);
  res.render("edit-todo", {
    title: "Edit Todo",
    layout: "layouts/mainLayout",
    todo,
  });
};


exports.editTodo = async function (req, res) {
  try {
    await Todo.findByIdAndUpdate(req.body._id, req.body);
    res.redirect("/");
  } catch (error) {
    console.error("Error editing todo:", error);
    res.status(500).send("Internal Server Error");
  }
};


exports.deleteTodo = function (req, res) {
  Todo.findByIdAndDelete(req.body._id).then((result) => {
    res.redirect("/");
  });
};
