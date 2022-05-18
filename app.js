const RoutesProducts = require('./routes/Products/index');
const RoutesDetails = require('./routes/Products/Details/index');
const RoutesProductsSneakers = require('./routes/Products/Sneakers/index');
const RoutesProductsSlipper = require('./routes/Products/Slipper/index');
const RoutesProductsMasculine = require('./routes/Products/Masculine/index');
const RoutesProductsFeminine = require('./routes/Products/Feminine/index');

const RoutesNewPassword = require('./routes/NewPassword/index');

const RoutesClient = require('./routes/Client/index');
const RoutesSales = require('./routes/Sales/index');

const RoutesCart = require('./routes/Cart/index');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', RoutesProducts);
app.use('/api', RoutesDetails);
app.use('/api', RoutesProductsSneakers);
app.use('/api', RoutesProductsSlipper);
app.use('/api', RoutesProductsMasculine);
app.use('/api', RoutesProductsFeminine);

app.use('/api', RoutesNewPassword);

app.use('/api', RoutesClient);
app.use('/api', RoutesSales);

app.use('/api', RoutesCart);


app.listen('3333', () => console.log('Servidor rodando'));