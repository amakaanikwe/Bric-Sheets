const express = require("express");
const app = express();
const path = require("path");
const log = console.log;

const PORT = 8081;

// app.use(express.static(“myApp”)); 
app.use(express.static(__dirname + '/dist'));

//Static Folder
app.use('./dist', express.static(path.join(__dirname, "dist")));



app.listen(PORT, () => log("Server is running on PORT,", 8081));