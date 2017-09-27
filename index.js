'use strict';
//import { getFrom, getDetails, getFaq} from './Components/index';


const express = require('express');
const bodyParser = require('body-parser');

const restService = express();
var Booking = require('./Components/Booking/booking.js');
var Details = require('./Components/Details/details.js');
var Faq = require('./Components/Faq/faq.js');

//
const BOOKING_SEARCH = 'search';
const BOOKING_ROUND = 'round';
const BOOKING_ONEWAY = 'oneway';
const BOOKING_FROM = 'from';
const BOOKING_TO = 'to';
const BOOKING_DATE2 = 'date2';
const BOOKING_SCHEDULE2 = 'schedule2';
const BOOKING_SCHEDULE2_2 = 'schedule2_2';
//
//
//const DETAILS_CONTACT_INFO = 'details/contactInfo';
//const DETAILS_PASSENGER = 'details/passenger';
//const DETAILS_SUMMARY2 = 'details/summary2';
//const DETAILS_SUMMARY1 = 'details/summary1';
//
//
//const FAQ_FCONTACT = 'faq/fcontact';
//const FAQ_FAQ = 'faq/faq';
//const FAQ_FPAYMENT= 'faq/fpayment';

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());


//Main code here
restService.post('/booking', function(req, res) {
	console.log(req.body.booking);
	switch(req.body.booking)
	{
		case BOOKING_FROM:
            var src = Booking.getFrom();
            console.log(src);
			res.send(src);
			break;
		case BOOKING_TO:
            var dest = Booking.getTo();
            console.log(dest);
			res.send(dest);
			break;
		case BOOKING_SCHEDULE2:
		    var sched2 = Booking.getSchedule2(req.body.travel_from, req.body.travel_to, req.body.depart_date);
			console.log(sched2);
			res.send(sched2);
			break;
		case BOOKING_SCHEDULE2_2:
		    var sched2_2 = Booking.getSchedule2_2(req.body.travel_from, req.body.travel_to, req.body.depart_date);
			console.log(sched2_2);
			res.send(sched2_2);
			break;
	}
});
restService.post('/details', function(req, res) {

});
restService.post('/faq', function(req, res) {

});
//Main code end


restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
