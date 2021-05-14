const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes.js');

app.use(express.json());
app.use('/', userRoutes);
app.listen(port, () => console.log(`Listening to port: ${port}`));