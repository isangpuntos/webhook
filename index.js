'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());


//Main code here
restService.post('/webhook', function(req, res) {

});
//Main code end


restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
