const RoutesProducts = require('./routes/Products/index');
const RoutesProductsSneakers = require('./routes/Products/Sneakers/index');
const RoutesProductsSlipper = require('./routes/Products/Slipper/index');
const RoutesProductsMasculine = require('./routes/Products/Masculine/index');
const RoutesProductsFeminine = require('./routes/Products/Feminine/index');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', RoutesProducts);
app.use('/api', RoutesProductsSneakers);
app.use('/api', RoutesProductsSlipper);
app.use('/api', RoutesProductsMasculine);
app.use('/api', RoutesProductsFeminine);

app.listen('3333', () => console.log('Servidor rodando'));