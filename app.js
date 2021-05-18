const dotenv = require('dotenv');
dotenv.config();
const url = process.env.MONGOLAB_URI;
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


mongoose.connect(`${process.env.MONGOLAB_URI}`, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true}).then( () => {console.log(`Connected to the database.`)}).catch( err => {console.log(err.message)});
mongoose.set('returnOriginal', false);

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/archive', archiveRoutes);
app.use('/api/orders', orderRoutes);
app.use('/', homepageRoutes);
app.use('/', apiRoutes);
app.listen(port, () => console.log(`Listening to port: ${port}`));