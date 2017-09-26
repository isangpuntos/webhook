export function getFrom()
{
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
}