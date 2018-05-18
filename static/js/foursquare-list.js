const request = require('request')

request({
  url: 'https://api.foursquare.com/v2/lists/5af879722b9844322f1aba96',
  method: 'GET',
  qs: {
    client_id: 'PASTE_CLIENT_ID_HERE',
    client_secret: 'PASTE_CLIENT_SECRET_HERE',
    v: '20180323'
  }
},

function (err, res, body) {
  if (err) {
    console.error(err)
  } else {
    const data = JSON.parse(body)
    const code = `\nResponse code: ${data.meta.code}`
    const listName = `\nList name: ${data.response.list.name}`
    const listAuthor = `\nList author: ${data.response.list.user.firstName} ${data.response.list.user.lastName}`
    const listDescription = `\nList description: ${data.response.list.description}`
    console.log(code, listName, listAuthor, listDescription, `\nVenues:\n`)
    // Iteration method to return info for each venue
    const items = data.response.list.listItems.items
    for (const item of items) {
      console.log(`${item.venue.name}, ${item.venue.location.address}, ${item.venue.location.city}`)
    }
    // Alternative iteration method
    items.forEach(item => {
      console.log(`${item.venue.name}, ${item.venue.location.address}, ${item.venue.location.city}`)
    })
  }
})
