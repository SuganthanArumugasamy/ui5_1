var express = require('express');
var path = require('path');
var router = express.Router();

router.get('', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'), (err) => {
        if (err)
        {
            console.log("File Not Found");
            res.send("Hello, Welcome to SAPUI5");     
        }
    });
});

module.exports = router;