"""This module creates navigates the nav-bar json file and
makes retrieves the url for each HTTP method. This module
needs to be combined with another module to actually get
the headers and body and them re-insert them in the json"""
import json
# import requests

FEED = open("./nav-bar.json", 'r')
DICO = json.load(FEED)
DICO = DICO[5:]
FEED.close()
BASEURL = "https://help.inin.com/developer/cic/docs/icws/webhelp/"
BASE = []


def print_da_sh(dic_arr, level=0):
    """
    ####keep digging until you find no kids###
    Function navigates the json and makes http req's to
    the URL to get the data about the headers and body
    """
    for dic in dic_arr:
        # print level * "\t" + dic["url"]
        if dic.has_key("children"):
            print_da_sh(dic["children"], level + 1)
        else:
            # request = requests.get(BASEURL + dic["url"])
            # print request.url
            # print request.status_code
            BASE.append(dic["title"])

print_da_sh(DICO)
print len(BASE)
