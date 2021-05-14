const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.listen(port, () => console.log(`Listening to port: ${port}`));