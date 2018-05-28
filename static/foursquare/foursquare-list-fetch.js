// Require modules to run file from Node.js outside of browser
const fetch = require('node-fetch')

const fetchFoursquare = async () => {
  try {
    const clientId = 'clientId'
    const clientSecret = 'clientSecret'
    const v = '20180528'
    const fetchResult = fetch(`https://api.foursquare.com/v2/lists/5af879722b9844322f1aba96?&client_id=${clientId}&client_secret=${clientSecret}&v=${v}`)
    const data = await (await fetchResult).json()
    console.group('Foursquare list')
    console.group('Metadata')
    console.log(`\nResponse code: ${data.meta.code}`,
      `\nList name: ${data.response.list.name}`,
      `\nList author: ${data.response.list.user.firstName} ${data.response.list.user.lastName}`,
      `\nList description: ${data.response.list.description}`)
    console.groupEnd('Metadata')
    console.group('Venues')
    const items = data.response.list.listItems.items.map(item => {
      console.log(`${item.venue.name}, ${item.venue.location.address}, ${item.venue.location.city}`)
    })
    console.groupEnd('Venues')
    console.groupEnd('Foursquare list')
  } catch (e) {
    throw Error(e)
  }
}

fetchFoursquare()
