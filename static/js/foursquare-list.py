import json
import requests

url = 'https://api.foursquare.com/v2/lists/5af879722b9844322f1aba96'

params = dict(client_id='PASTE_CLIENT_ID_HERE',
              client_secret='PASTE_CLIENT_SECRET_HERE',
              v='20180323')
resp = requests.get(url=url, params=params)
data = json.loads(resp.text)

# If this file is called as a standalone program:
if __name__ == '__main__':
    # Display output in terminal
    print('\nResponse code: {}'.format(data['meta']['code']),
          '\nList name: {}'.format(data['response']['list']['name']),
          '\nList author: {} {}'.format(data['response']['list']['user']['firstName'],
                                        data['response']['list']['user']['lastName']),
          '\nList description: {}'.format(data['response']['list']['description']),
          '\nVenues:')
    # Iteration method to return info for each venue
    # This method is syntactically similar to JavaScript
    items = data['response']['list']['listItems']['items']
    for item in items:
        print('{}, {}, {}'.format(item['venue']['name'], item['venue']['location']['address'],
                                  item['venue']['location']['city']))
    # Alternative iteration method
    for i in data['response']['list']['listItems']['items']:
        print('{}, {}, {}'.format(i['venue']['name'], i['venue']['location']['address'],
                                  i['venue']['location']['city']))
