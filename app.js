const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
const orderRoutes = require('./routes/orderRoutes.js');
const archiveRoutes = require('./routes/archiveRoutes.js')
const homepageRoutes = require('./routes/homepageRoutes.js')
const apiRoutes = require('./routes/apiRoutes.js')


mongoose.connect('mongodb+srv://hlagunsad:UR3cGE3CckOFBmH3@cluster0.dsnwi.mongodb.net/E-Commerce?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true}).then( () => {console.log(`Connected to the database.`)}).catch( err => {console.log(err.message)});
mongoose.set('returnOriginal', false);

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/archive', archiveRoutes);
app.use('/api/orders', orderRoutes);
app.use('/', homepageRoutes);
app.use('/', apiRoutes);
app.listen(port, () => console.log(`Listening to port: ${port}`));