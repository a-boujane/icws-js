"""getHeaders and body. The body methos is not implemented yet"""
import requests
from bs4 import BeautifulSoup


def get_headers(url, method):
    """get Headers from URL and method"""
    page = requests.get(url)
    soup = BeautifulSoup(page.text, "html.parser")
    ximo = soup.body.find("header", attrs={"id": method})\
        .parent\
        .find('section', attrs={"class": "parameter-table "})\
        .find_all("div", attrs={"class": "row"})
    for row in ximo[1:]:
        print row.find("div", attrs={"class": "span2"}).string


URL = "https://help.inin.com/developer/cic/docs\
/icws/webhelp/icws/(sessionId)/ipa/process-insta\
nces/index.htm#post"
METHOD = "post"
get_headers(URL, METHOD)

# fee = open("./example.html",'wb')
# fee.write(requests.get(URL).content)
# fee.close()
