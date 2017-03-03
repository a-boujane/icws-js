# API calls extractor

This is a python module built to extract the api calls in a reusable JSON format from [ICWS api](https://help.inin.com/developer/cic/docs/icws/webhelp/ConceptualContent/Welcome.htm#top).


Example of a JSON element:

        {
                "depth": 3,
                "id": "icws-sessionId-messaging-subscriptions-activations-workgroups-subscriptionId-index-htm-put",
                "type": "put-method",
                "title": "PUT",
                "url": "icws/(sessionId)/messaging/subscriptions/activations/workgroups/(subscriptionId)/index.htm#put"
                "headers":[
                    {"header1":"value1"},
                    {"header2":"value2"}
                ]
                "body":{
                    "element1":"value1",
                    "element2":{
                        "subkey1":"subvalue1",
                        "subkey2":"subvalue2"
                }
            }
        }
