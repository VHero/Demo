module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send('Hello World!');
    });

    app.get('/customer', function(req, res) {
        res.send('Hello Customer');
    })

    app.get('/admin', function(req, res) {
        res.send('Hello Admin');
    })
};
