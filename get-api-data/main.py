"""getHeaders and body. The body methos is not implemented yet"""
import pprint
import requests
from bs4 import BeautifulSoup as BS

EXAMPLEURL = "https://help.inin.com/developer/cic/docs/icws/webhelp/icws/(sessionId)/activations/users/(userId)/index.htm#get"
METHOD = "get"

# FEE = open("./example.html", 'wb')
# FEE.write(requests.get(EXAMPLEURL).content)
# FEE.close()

def get_call_data(url, method):
    """this method is what is supposed to be called from outside
    this module to get the headers + body of each api call"""
    print url
    page = requests.get(url)
    soup = BS(page.text, "html.parser")
    # page = open("example.html", 'r')
    # soup = BS(page.read(), "html.parser")
    page.close()
    sections = soup.find("header", attrs={"id": method})\
    .find_next_sibling().section.find_all('section')
    get_headers(sections[0])
    get_templae(sections[0])
    get_query_params(sections[0])
    print "----------------------- BODY ---------------------------"
    p_p = pprint.PrettyPrinter(indent=4)
    p_p.pprint(get_body(sections[1]))

def get_headers(parameters_section):
    """get Headers from URL and method"""
    get_x_param(parameters_section, "Header")

def get_templae(parameters_section):
    """get template from URL and method"""
    get_x_param(parameters_section, "Template")

def get_query_params(parameters_section):
    """Get the query params from the Parameters section"""
    get_x_param(parameters_section, "Query")

def get_x_param(parameters_section, parameters):
    """Get the X params from the Parameters section"""
    print "--------------------- {0} Params -------------------------".format(parameters)
    ximo = parameters_section.find_all("span", attrs={"data-param-type":parameters})
    for item in ximo:
        print item.parent.find_next_sibling().get_text()

def get_body(body_section, level=0):
    """gets the api call body from the html webpage"""
    # FIrst, let's create the dict to be converted to a json later
    result = {}
    # starting with the simple elements
    simple_keys = body_section\
    .find_all("div", attrs={"class":"row data-contract-level-"+str(level)})
    for item in simple_keys:
        dict_to_be = item.find_all("div", attrs={"class":"span2"})
        result[dict_to_be[0].get_text()] = dict_to_be[1].get_text()
    # Then, let's get the other Complex elements
    complex_keys = body_section\
    .find_all("div", attrs={"class":"row data-contract-level-"+str(level)+" collapsible collapsed"})
    for complexy in complex_keys:
        complex_key = complexy.find("span", attrs={"class":"property-content"}).get_text()
        siblingo = complexy.find_next_sibling()
        result[complex_key] = get_body(siblingo, level+1)
    return result

get_call_data(EXAMPLEURL, METHOD)

