require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const path = require('path');

//database connection
connection();

// middlewares
app.use(express.json())
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'lamemoria', 'build')));

//routes

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'lamemoria', 'build', 'index.html'));
  });

const port = process.env.PORT || 9000;
app.listen(port,()=> console.log(`Listening to Port ${port}...`))