const RoutesProducts = require('./routes/Products/index');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', RoutesProducts);

app.listen('3333', () => console.log('Servido rodando'));