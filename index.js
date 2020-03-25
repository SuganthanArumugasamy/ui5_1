var express = require('express');
var cors = require('cors');
var path = require('path');

var router = require('./router/AppRouter')

var port = 80;

var app = express();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'), (err) => {
        if (err)
        {
            console.log("File Not Found");
            res.send("Hello, Welcome to SAPUI5");     
        }
    });
});

app.use('/ui5app', router);

app.listen(port, '0.0.0.0', () => {
    console.log(`server is started at port ${port}`); 
});