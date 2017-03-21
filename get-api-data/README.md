# API calls extractor

This is a python module built to extract the api calls in a reusable JSON format from [ICWS api](https://help.inin.com/developer/cic/docs/icws/webhelp/ConceptualContent/Welcome.htm#top).


Example of a JSON element:

        
        
        {
            "title": "PUT",
            "url": "icws/(sessionId)/activations/users/(userId)/index.htm#put",
            "type": "put-method",
            "icon": "create",
            "depth": 4,
            "data": {
                "body": {
                    "activations": {
                        "[key]": "String",
                        "[value]": "Boolean"
                    }
                },
                "headers": [
                    "ININ-ICWS-CSRF-Token",
                    "Cookie"
                ],
                "template": [
                    "sessionId",
                    "userId"
                ],
                "query_params": []
            },
            "id": "icws-sessionId-activations-users-userId-index-htm-put"
        }
    
