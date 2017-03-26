"""This module creates navigates the nav-bar json file and
makes retrieves the url for each HTTP method. This module
needs to be combined with another module to actually get
the headers and body and them re-insert them in the json"""
import json
import utils
import worker

FEED = open("./json/nav_bar.json", 'r')
DICO = json.load(FEED)
DICO = DICO[5:]
FEED.close()
BASEURL = "https://help.inin.com/developer/cic/docs/icws/webhelp/"
BASE = []
ICONS = {
    "application":"assignment",
    "resources":"bookmark",
    "resource":"local_offer",
    "get-method":"search",
    "post-method":"add",
    "put-method":"create",
    "delete-method":"clear"
}

def print_da_sh(dic_arr, level=0):
    """
    ####keep digging until you find no kids###
    Function navigates the json and makes http req's to
    the URL to get the data about the headers and body
    """
    for dic in dic_arr:
        # print level * "\t" + dic["url"]
        dic["icon"] = ICONS[dic["type"]]
        if dic.has_key("children"):
            print_da_sh(dic["children"], level + 1)
        else:
            BASE.append("1")
            # i = 100*len(BASE)/514
            # sys.stdout.write("{0}%\r".format(i))
            # sys.stdout.flush()
            try:
                dic["data"] = worker.get_call_data(BASEURL+dic["url"], dic["title"])
            except AttributeError:
                print "\n\n\n\n"
                print "right here: {0}".format(BASEURL+dic["url"])
            utils.progress(len(BASE), 514, dic["url"])
    return dic_arr


with open("./json/ultimate.min.json", 'w') as ffile:
    ffile.write(json.dumps(print_da_sh(DICO)))

print "\n\n\n"

