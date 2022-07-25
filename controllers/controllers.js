const fs = require('fs');

exports.homeController = (req, res) => {
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            res.send('<h1>Something went wrong!</h1>');
        } else {
            res.write(data);
            res.end();
        }
    });
};

exports.aboutController = (req, res) => {
    fs.readFile('./views/about.html', (err, data) => {
        if (err) {
            res.send('<h1>Something went wrong!</h1>');
        } else {
            res.write(data);
            res.end();
        }
    });
};

exports.helpController = (req, res) => {
    const error = new Error('<h1>Bad Request</h1>');
    error.status = 400;
    throw error;
    fs.readFile('./views/help.html', (err, data) => {
        if (err) {
            res.send('<h1>Something went wrong!</h1>');
        } else {
            res.write(data);
            res.end();
        }
    });
};
