/**
 * Created by amit on 14/6/16.
 */
/**
 * Created by amit on 2/1/16.
 */
var express = require('express');
var app = express();

app.set('view engine', 'html');
app.use(express.static(__dirname + '/www'));


app.get('/', function(req, res) {
    res.render("/www/index.html");
});
var server = app.listen(3300, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at http://%s:%s', host, port);
});