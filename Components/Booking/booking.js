var Booking = {
  getFrom: function () {
    var from = ["Bacolod", "Bato, Leyte", "CDO", "Cebu", "Camotes", "Dipolog", "Iligan", "Ilo-ilo"]; 

    var fromList = [];
    for (var i = 0; i < from.length; i++) {
         fromList.push({          
              "title": from[i],
                  "block_names": ["To2"],
                  "set_attributes": 
                  {
                    "travel_from": from[i]
                  },
         });
    } 

    fromList.push({          
         "title": "NEXT>>",
         "block_names": ["NEXT>>"],
         "set_attributes": 
          {
              "travel_from": "NEXT>>"
          },
    });

    var fromJson = {
                    "messages": [
                        {
                            "attachment": {
                            "type": "template",
                            "payload": {
                                "template_type": "button",
                                "text": "Travel from?",
                                "buttons": [
                                {
                                    "type": "show_block",
                                    "block_names": ["Search"],
                                    "title": "Back"
                                }
                              ]
                            }
                          },
                          "quick_replies": ""
                        }
                    ]
                };

    fromJson.messages[0].quick_replies = fromList;
	console.log(fromJson);
	return fromJson;
  },
  
  getTo: function () {
    var toArr = ["Camotes", "Iligan"]; 

    var toList = [];
    for (var i = 0; i < toArr.length; i++) {
         toList.push({          
              "title": toArr[i],
                  "block_names": ["Date22"],
                  "set_attributes": 
                  {
                    "travel_to": toArr[i]
                  },
         });
    } 

    /*fromList.push({          
         "title": "NEXT>>",
         "block_names": ["NEXT>>"],
         "set_attributes": 
          {
              "travel_from": "NEXT>>"
          },
    });*/

    var toJson = {
                    "messages": [
                        {
                            "attachment": {
                            "type": "template",
                            "payload": {
                                "template_type": "button",
                                "text": "Travel to?",
                                "buttons": [
                                {
                                    "type": "show_block",
                                    "block_names": ["Search"],
                                    "title": "Back"
                                }
                              ]
                            }
                          },
                          "quick_replies": ""
                        }
                    ]
                };

    toJson.messages[0].quick_replies = toList;
    console.log(toJson);
    return toJson;
  },
  
getSchedule2: function (travel_from, travel_to, departure) {
    var deptTime = ["6:30 AM", "8:10 AM", "9:50 AM", "11:30 AM", "1:10 AM", "2:50 AM", "4:45 PM"]; 
    var text = (travel_to + " to " + travel_from + " Departure date: " + departure);
    var deptTimeList = [];
    for (var i = 0; i < deptTime.length; i++) {
         deptTimeList.push({          
                "title": deptTime[i],
                "block_names": [],
				"set_attributes": 
				{
				   "return_time": deptTime[i]
				},
         });
    } 

    var deptTimeJson = {
                    "messages": [
                        {
                          "text": text,
                          "quick_replies": ""
                        }
                    ]
                };

    deptTimeJson.messages[0].quick_replies = deptTimeList;
    console.log(deptTimeJson);
    return deptTimeJson;
  },
  
getSchedule2_2: function (travel_from, travel_to, departure) {
    var deptTime = ["6:30 AM", "8:10 AM", "9:50 AM", "11:30 AM", "1:10 AM", "2:50 AM", "4:45 PM"]; 
    var text = (travel_from + " to " + travel_to + " Departure date: " + departure);
    var deptTimeList = [];
    for (var i = 0; i < deptTime.length; i++) {
         deptTimeList.push({          
                "title": deptTime[i],
                "block_names": [],
				"set_attributes": 
				{
				   "return_time": deptTime[i]
				},
         });
    } 

    var deptTimeJson = {
                    "messages": [
                        {
                          "text": text,
                          "quick_replies": ""
                        }
                    ]
                };

    deptTimeJson.messages[0].quick_replies = deptTimeList;
    console.log(deptTimeJson);
    return deptTimeJson;
  },
  
getAccomodation2: function (travel_from, travel_to, depart_time, depart_date, for_depart) {
    var message = travel_from + " to " + travel_to + " Departure date: " + depart_date + " Departure Time: " + depart_time;
	
	if(for_depart === "false") {
		message = travel_to + " to " + travel_from + " Departure date: " + depart_date + " Departure Time: " + depart_time;
	
		var company = {
			  "messages": [	{
				  "attachment": {
					"type": "template",
					"payload": {
					    "template_type": "button",
					    "text": message,
					    "buttons": [
								{
									"type": "show_block",
									"block_names": [],
									"title": "Weesam Express",
									"set_attributes" : {
										"company" : "Weesam Express"
									}
								},
								{
									"type": "show_block",
									"block_names": [],
									"title": "Medallion Transport Inc",
									"set_attributes" : {
										"company" : "Medallion Transport Inc"
									}
								},
								{
									"type": "show_block",
									"block_names": [],
									"title": "Trans Asia Shipping Lines",
									"set_attributes" : {
										"company" : "Trans Asia Shipping Lines"
									}
								},
								{
									"type": "show_block",
									"block_names": [],
									"title": "Lite Ferries",
									"set_attributes" : {
										"company" : "Lite Ferries"
									}
								},
								{
									"type": "show_block",
									"block_names": [],
									"title": "George and peter lines, Inc",
									"set_attributes" : {
										"company" : "George and peter lines, Inc"
									}
								},
								{
									"type": "show_block",
									"block_names": [],
									"title": "Jomalia Shipping Corporation",
									"set_attributes" : {
										"company" : "Jomalia Shipping Corporation"
									}
								}
					        ]
					    }
				    }
				}
			]
		}
	} else {
		var company = {
			  "messages": [	{
				  "attachment": {
					"type": "template",
					"payload": {
					    "template_type": "button",
					    "text": message,
					    "buttons": [
								{
									"type": "show_block",
									"block_names": [],
									"title": "Weesam Express",
									"set_attributes" : {
										"company2" : "Weesam Express"
									}
								},
								{
									"type": "show_block",
									"block_names": [],
									"title": "Medallion Transport Inc",
									"set_attributes" : {
										"company2" : "Medallion Transport Inc"
									}
								},
								{
									"type": "show_block",
									"block_names": [],
									"title": "Trans Asia Shipping Lines",
									"set_attributes" : {
										"company2" : "Trans Asia Shipping Lines"
									}
								},
								{
									"type": "show_block",
									"block_names": [],
									"title": "Lite Ferries",
									"set_attributes" : {
										"company2" : "Lite Ferries"
									}
								},
								{
									"type": "show_block",
									"block_names": [],
									"title": "George and peter lines, Inc",
									"set_attributes" : {
										"company2" : "George and peter lines, Inc"
									}
								},
								{
									"type": "show_block",
									"block_names": [],
									"title": "Jomalia Shipping Corporation",
									"set_attributes" : {
										"company2" : "Jomalia Shipping Corporation"
									}
								}
					        ]
					    }
				    }
				}
			]
		}
	}
	return company;
  },	

getAccomodation2_2: function (for_depart) {
    var acommOptions = ["Economy: 220","Tourist: 250","First Class: 320"]; 
    var acommOptionsList = [];
    for (var i = 0; i < acommOptions.length; i++) {
         if(for_depart === "true") {
			 acommOptionsList.push({          
					"title": acommOptions[i],
					"block_names": [],
					"set_attributes": 
					{
					   "depart_accom": acommOptions[i]
					},
			 });
		 } else {
		 	acommOptionsList.push({          
					"title": acommOptions[i],
					"block_names": [],
					"set_attributes": 
					{
					   "return_accom": acommOptions[i]
					},
			 });
		 }
    } 

    var acommOptionsJson = {
                    "messages": [
                        {
                          "text": "Choose from the following: ",
                          "quick_replies": ""
                        }
                    ]
                };

    acommOptionsJson.messages[0].quick_replies = acommOptionsList;
    console.log(acommOptionsJson);
    return acommOptionsJson;
  }
};

module.exports = Booking;

