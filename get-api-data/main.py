"""getHeaders and body. The body methos is not implemented yet"""
import requests
from bs4 import BeautifulSoup as BS
import pprint

EXAMPLEURL = "https://help.inin.com/developer/cic/docs/icws/webhelp/icws/(sessionId)/configuration/recording-beep-tones/index.htm#post"
METHOD = "get"

# FEE = open("./example.html", 'wb')
# FEE.write(requests.get(EXAMPLEURL).content)
# FEE.close()

def get_call_data(url, method):
    """this method is what is supposed to be called from outside
    this module to get the headers + body of each api call"""
    page = requests.get(url)
    soup = BS(page.text, "html.parser")
    # page = open("example.html", 'r')
    # soup = BS(page.read(), "html.parser")
    page.close()
    sections = soup.find("header", attrs={"id": method})\
    .find_next_sibling().section.find_all('section')
    get_headers(sections[0])
    print "----------------------- BODY ---------------------------"
    pp = pprint.PrettyPrinter(indent=4)
    pp.pprint(get_body(sections[1]))

def get_headers(header_section):
    """get Headers from URL and method"""
    print "--------------------- HEADERS -------------------------"
    ximo = header_section.find_all("div", attrs={"class": "row"})
    for row in ximo[1:]:
        print row.find("div", attrs={"class": "span2"}).string


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

# def get_siblingo(tag):
#     """Gets us the next Sibling in case the actual next_sibling is not a tag"""
#     result = tag.next_siblings
#     while not isinstance(result, Tag):
#         result = result.next_siblings
#     return result

get_call_data(EXAMPLEURL, METHOD)

