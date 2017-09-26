'use strict';
import { getBookings,getDetails,getFaq} from './Components/index';


const express = require('express');
const bodyParser = require('body-parser');

const restService = express();
//
//const BOOKING_SEARCH = 'booking/search';
//const BOOKING_ROUND = 'booking/search';
//const BOOKING_ONEWAY = 'booking/search';
//const BOOKING_FROM = 'booking/search';
//const BOOKING_TO = 'booking/search';
//const BOOKING_DATE2 = 'booking/search';
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

});
restService.post('/details', function(req, res) {

});
restService.post('/faq', function(req, res) {

});
//Main code end


restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
