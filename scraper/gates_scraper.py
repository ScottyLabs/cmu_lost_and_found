import requests
from bs4 import BeautifulSoup

response = requests.get('https://www.cs.cmu.edu/~lostfound/')

soup = BeautifulSoup(response.text, 'html.parser')

table = soup.find_all('tr')
print(table)