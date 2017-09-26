'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
});

restService.post('/testToken', function(req, res) {
        var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.token ? req.body.result.parameters.token : "Seems like some problem. Speak again."
    
        if(speech === "test")
        {
            speech = "testing lang"
            return res.json({
               speech: speech,
               displayText: speech,
               source: 'webhook-echo-sample'
            });
        }
	else
        {
            var url = "http://www.google.com/"
	    var method = "POST"
	    var postData = "Some data"
	    var async = true

	    var request = new XMLHttpRequest()
	    request.onload = function () {
	       var status = request.status // HTTP response status, e.g., 200 for "200 OK"
	       var speech = request.responseText // Returned data, e.g., an HTML document.
	    }

	    request.open(method, url, async)
	    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
	    request.send(postData)
        }
        return res.json({
            speech: speech,
            displayText: speech,
            source: 'webhook-echo-sample'
       });
});

restService.post('/getToken', function(req, res) {
    var speech = "";req.body.result && req.body.result.parameters && req.body.result.parameters.token ? req.body.result.parameters.token : "Seems like some problem. Speak again."
	var url = "http://www.google.com/";
	var method = "POST";
	var postData = "Some data";
	var async = true;

	var request = new XMLHttpRequest();
	request.onload = function () {
	   var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
	   var speech = request.responseText; // Returned data, e.g., an HTML document.
	}

	request.open(method, url, async);
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send(postData);

    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
});

restService.post('/slack-test', function(req, res) {

    var slack_message = {
        "text": "Details of JIRA board for Browse and Commerce",
        "attachments": [{
            "title": "JIRA Board",
            "title_link": "http://www.google.com",
            "color": "#36a64f",

            "fields": [{
                "title": "Epic Count",
                "value": "50",
                "short": "false"
            }, {
                "title": "Story Count",
                "value": "40",
                "short": "false"
            }],

            "thumb_url": "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png"
        }, {
            "title": "Story status count",
            "title_link": "http://www.google.com",
            "color": "#f49e42",

            "fields": [{
                "title": "Not started",
                "value": "50",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }]
        }]
    }
    return res.json({
        speech: "speech",
        displayText: "speech",
        source: 'webhook-echo-sample',
        data: {
            "slack": slack_message
        }
    });
});



// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}

// Configure the request
var options = {
    url: 'http://samwize.com',
    method: 'POST',
    headers: headers,
    form: {'key1': 'xxx', 'key2': 'yyy'}
}

// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(body)
    }
});

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
