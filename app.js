const RoutesProducts = require('./routes/Products/index');
const RoutesProductsSneakers = require('./routes/Products/Sneakers/index');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', RoutesProducts);
app.use('/api', RoutesProductsSneakers);

app.listen('3333', () => console.log('Servidor rodando'));