const Todo = require("../model/todos");

// Show All Documents || Home page
exports.findAllTodo = async function (req, res) {
  const todos = await Todo.find({});
  res.render("index", {
    title: "Node JS Todo App",
    layout: "layouts/mainLayout",
    todos,
  });
};

// Add todo page
exports.addTodoRoutes = function (req, res) {
  res.render("add-todo", {
    title: "Add Todo",
    layout: "layouts/mainLayout",
  });
};

// Add new todo
exports.addTodo = async function (req, res) {
  try {
    // Check if a todo with the same 'kegiatan' already exists
    const existingTodo = await Todo.findOne({
      action: req.body.action.toLowerCase(),
    });

    if (existingTodo) {
      // A todo with the same 'kegiatan' already exists
      return res.render('add-todo', {
        title: 'Add Todo',
        layout: 'layouts/mainLayout',
        error: 'Task already have , please add another task!',
      });
    }

    // Create a new todo and save it to the database
    const newTodo = new Todo({
      action: req.body.action,
      // Add other properties from req.body as needed
    });

    await newTodo.save();

    res.redirect('/');
  } catch (error) {
    console.error('Error adding todo:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Edit todo page
exports.editTodoRoutes = async function (req, res) {
  const todo = await Todo.findById(req.params.id);
  res.render("edit-todo", {
    title: "Edit Todo",
    layout: "layouts/mainLayout",
    todo,
  });
};


// edit todo
exports.editTodo = async function (req, res) {
  try {
    await Todo.findByIdAndUpdate(req.body._id, req.body);
    res.redirect("/");
  } catch (error) {
    console.error("Error editing todo:", error);
    res.status(500).send("Internal Server Error");
  }
};


// delete todo
exports.deleteTodo = function (req, res) {
  Todo.findByIdAndDelete(req.body._id).then((result) => {
    res.redirect("/");
  });
};
