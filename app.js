const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes.js');

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.listen(port, () => console.log(`Listening to port: ${port}`));