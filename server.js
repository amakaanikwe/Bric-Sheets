const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require("path");
const log = console.log;

const PORT = 8080;

// app.use(express.static(“myApp”)); 

//Static Folder
app.use('/public', express.static(path.join(__dirname, "public")));



app.listen(PORT, () => log("Server is running on PORT,", 8080));