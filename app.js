var express = require('express');
var app = express();

function handleRootPath(req, res) {
    res.send("Found me!");
}

app.get('/', handleRootPath);

var server = app.listen(3000, function() {
    console.log("Listening on port %d", server.address().port);
});
