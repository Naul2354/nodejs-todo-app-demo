const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv").config({ path: "config.env" });
const methodOverride = require("method-override");
// const connectDB = require("./server/database/database.js");
const mongoose = require("mongoose")
const app = express();
const port = process.env.PORT || 8089;

// Set ejs
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(expressLayouts);

// Middleware
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

// Connect db
/* Connect to mongoDB*/
mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=> console.log(`Connect to mongoDB...`))
    .catch((err)=> console.log(err))


// router
app.use(require("./server/routes/routes"));

app.listen(port, function () {
  console.log(`Server is listening on http://localhost:${port}`);
});
