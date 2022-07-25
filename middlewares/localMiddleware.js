function localMiddleware(req, res, next) {
    console.log('I am a local middleware.');
    next();
}

module.exports = localMiddleware;
