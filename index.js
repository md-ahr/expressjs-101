const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const globalMiddleware = require('./middlewares/globalMiddleware');

const routes = require('./routes/routes');

const PORT = process.env.PORT || 4000;

const app = express();

const GLOBAL_MIDDLEWARES = [
    cors(),
    morgan('dev'),
    express.json(),
    express.urlencoded({ extended: true }),
    express.static('./public'),
    globalMiddleware,
    ('/', routes)
];

app.use(GLOBAL_MIDDLEWARES);

app.use((req, res, next) => {
    const error = new Error(`<h1>404 Not Found</h1>`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    console.log(`Error: ${err}`);
    if (err.status) {
        return res.status(err.status).send(err.message);
    }
    res.status(500).send(`<h1>Internal Server Error</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
