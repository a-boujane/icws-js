"""this allows to retrieve the headers, query params, and body from a given URL """
import requests
import json
import pprint
from bs4 import BeautifulSoup as BS

EXAMPLEURL = "https://help.inin.com/developer/cic/docs/icws/webhelp/\
icws/connection/index.htm#post"
METHOD = "post"
DATA_SOURCE={}

# FEE = open("./debug.html", 'wb')
# FEE.write(requests.get(EXAMPLEURL).content)
# FEE.close()

def get_call_data(url, method):
    """this method is what is supposed to be called from outside
    this module to get the headers + body of each api call"""
    data = {}
    method = method.lower()
    page = requests.get(url)
    soup = BS(page.text, "html.parser")
    # page = open("example.html", 'r')
    # soup = BS(page.read(), "html.parser")
    data_clone_source(soup)
    sections = soup.find("header", attrs={"id": method})\
    .find_next_sibling().section.find_all('section')
    data["headers"] = get_headers(sections[0])
    data["template"] = get_templae(sections[0])
    data["query_params"] = get_query_params(sections[0])
    data["body"] = get_body(sections[1])
    return data

def data_clone_source(soup):
    """Retrieve data contract clone sources"""
    result = soup.findAll("div", attrs={"class":"complex-type-contents data-contract-clone-source"})
    for item in result:
        level = item.find("div").attrs["class"][1][-1:]
        DATA_SOURCE[item.attrs['data-clone-id']] = get_body(item, int(level))
    # pprint.pprint(DATA_SOURCE)


def get_headers(parameters_section):
    """get Headers from URL and method"""
    return get_x_param(parameters_section, "Header")

def get_templae(parameters_section):
    """get template from URL and method"""
    return get_x_param(parameters_section, "Template")

def get_query_params(parameters_section):
    """Get the query params from the Parameters section"""
    return get_x_param(parameters_section, "Query")

def get_x_param(parameters_section, parameters):
    """Get the X params from the Parameters section"""
    ximo = parameters_section.find_all("span", attrs={"data-param-type":parameters})
    result = []
    for item in ximo:
        result.append(item.parent.find_next_sibling().get_text())
    return result

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
        if "data-contract-clone-target" in siblingo.attrs["class"]:
            result[complex_key] = DATA_SOURCE[siblingo.attrs["data-clone-id"]]
        else:
            result[complex_key] = get_body(siblingo, level+1)

        # data-contract-clone-target
    return result

with open("./json/debug.json", 'w') as fifile:
    fifile.write(json.dumps(get_call_data(EXAMPLEURL, METHOD)))

