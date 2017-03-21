# API calls extractor

This is a python module built to extract the api calls in a reusable JSON format from [ICWS api](https://help.inin.com/developer/cic/docs/icws/webhelp/ConceptualContent/Welcome.htm#top).

The [main.py](./main.py) file iterates over all URLs listed in the doc page, calls [worker.py](./worker.py) for each page, which gets the relevant data from the html code.

# Example of a JSON element:

        
        
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
    
