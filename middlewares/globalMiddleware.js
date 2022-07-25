function globalMiddleware(req, res, next) {
    console.log(`${req.method} - ${req.url}`);
    console.log('This is a global middleware.');
    if (req.query.bad) {
        return res.status(400).send('<h1>Bad Request</h1>')
    }
    next();
}

module.exports = globalMiddleware;
