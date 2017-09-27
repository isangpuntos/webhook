module.exports = {
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

    var deptTimeList = [];
    for (var i = 0; i < deptTime.length; i++) {
         deptTimeList.push({          
                "title": deptTime[i],
                "block_names": [],
                "set_attributes": 
                {
                  "depart_time": deptTime[i]
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

    var deptTimeJson = {
                    "messages": [
                        {
                            "attachment": {
                            "type": "template",
                            "payload": {
                                "template_type": "button",
                                "text":  (travel_to + " to " + travel_from + " Departure date: " + departure),
                                "buttons": [
                                
                              ]
                            }
                          },
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

    /*fromList.push({          
         "title": "NEXT>>",
         "block_names": ["NEXT>>"],
         "set_attributes": 
          {
              "travel_from": "NEXT>>"
          },
    });*/

    var deptTimeJson = {
                    "messages": [
                        {
                            "attachment": {
                            "type": "template",
                            "payload": {
                                "template_type": "button",
                                "text": (travel_from + " to " + travel_to + " Departure date: " + departure),
                                "buttons": [
                                
                              ]
                            }
                          },
                          "quick_replies": ""
                        }
                    ]
                };

    deptTimeJson.messages[0].quick_replies = deptTimeList;
	console.log(travel_from + " to " + travel_to + " Departure date: " + departure);
	console.log(deptTimeJson);
    return deptTimeJson;
  }
};

