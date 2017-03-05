"""getHeaders and body. The body methos is not implemented yet"""
import requests
from bs4 import BeautifulSoup

EXAMPLEURL = "https://help.inin.com/developer/cic/docs/\
icws/webhelp/icws/(sessionId)/messaging/subscript\
ions/queues/(subscriptionId)/index.htm#put"
METHOD = "put"

# FEE = open("./example.html", 'wb')
# FEE.write(requests.get(EXAMPLEURL).content)
# FEE.close()

def get_call_data(url, method):
    """this method is what is supposed to be called from outside
    this module to get the headers + body of each api call"""
    page = requests.get(url)
    soup = BeautifulSoup(page.text, "html.parser")
    # page = open("example.html", 'r')
    # soup = BeautifulSoup(page.read(), "html.parser")
    page.close()
    sections = soup.find("header", attrs={"id": method})\
    .find_next_sibling().section.find_all('section')
    get_headers(sections[0])
    get_body(sections[1])

def get_headers(header_section):
    """get Headers from URL and method"""
    ximo = header_section.find_all("div", attrs={"class": "row"})
    for row in ximo[1:]:
        print row.find("div", attrs={"class": "span2"}).string


def get_body(body_section):
    """gets the api call body from the html webpage"""
    print body_section.prettify()

get_call_data(EXAMPLEURL, METHOD)

