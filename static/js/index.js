async function initMap () {
  try {
    // Model - Fetch data from Foursquare list ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const listUrl = 'https://api.foursquare.com/v2/lists/5af879722b9844322f1aba96'
    const params = {
      client_id: '5JU1MJJJ4OUU2OQO1XYMMGK5OOHBCF3FFJURKWGXIIM0AN0Q',
      client_secret: 'BJ5QE50VMWVRFEZBNQO3O4RBFJDPFCNZ0P13GUDERTAG054Y',
      v: '20180528'
    }
    const query = fetch(`${listUrl}?&client_id=${params.client_id}&client_secret=${params.client_secret}&v=${params.v}`)
    const data = await (await query).json()
    const items = data.response.list.listItems.items
    // View - Google Map ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Initialize map
    const backBay = {lat: 42.3492897, lng: -71.0905478}
    const map = new google.maps.Map(document.getElementById('map'), {
      center: backBay,
      zoom: 13
    })
    const bounds = new google.maps.LatLngBounds()
    google.maps.event.addDomListener(window, 'resize', () => map.fitBounds(bounds))
    const infoWindow = new google.maps.InfoWindow()
    // Create markers and set infoWindow content for each marker
    const markersArray = []
    const createMarkers = items.forEach(item => {
      let marker = new google.maps.Marker({
        map: map,
        position: {lat: item.venue.location.lat, lng: item.venue.location.lng},
        title: `${item.venue.name}`,
        address: `${item.venue.location.formattedAddress[0]}, ${item.venue.location.formattedAddress[1]}`,
        city: `${item.venue.location.city}`,
        canonicalUrl: `https://foursquare.com/v/${item.venue.name.toLowerCase().replace(/[^a-zA-Z\s]/g, '').replace(/\s/g, '-')}/${item.venue.id}`,
        googleUrl: `https://www.google.com/maps/search/?api=1&query=${escape(item.venue.name)}&query=${item.venue.location.lat},${item.venue.location.lng}`,
        photoUrl: `${item.photo.prefix}250x150${item.photo.suffix}`,
        tip: `${item.tip.text}`,
        animation: google.maps.Animation.DROP,
        clickMarker: marker => google.maps.event.trigger(marker, 'click')
      })
      marker.addListener('click', () => {
        marker.setAnimation(google.maps.Animation.BOUNCE)
        setTimeout(() => marker.setAnimation(null), 1000)
        infoWindow.setContent(
          `<div id="info-window-content">
            <header>
              <img src="${marker.photoUrl}" alt="Venue photo">
              <h2>${marker.title}</h2>
            </header>
            <div class="info-window-text">
              <p>${marker.address}</p>
              <p>${marker.tip}</p>
            </div>
            <div><a href="${marker.canonicalUrl}">View on Foursquare</a></div>
            <div><a href="${marker.googleUrl}">View on Google Maps</a></div>
            <div>
              <a href="https://foursquare.com/user/480979057/list/bostons-best-beans">
                <img src="static/img/Powered-by-Foursquare-one-color-300.png" alt="Foursquare logo">
              </a>
            </div>
          </div>`)
        infoWindow.open(map, marker)
      })
      bounds.extend(marker.position)
      map.fitBounds(bounds)
      markersArray.push(marker)
    })
    // Filter markers by dropdown selection
    const dropdown = document.getElementById('list-filter-dropdown')
    dropdown.addEventListener('change', () => {
      let selection = dropdown.value
      markersArray.forEach(marker => {
        if (selection === 'All') {
          marker.setVisible(true)
        } else {
          if (selection === marker.city) {
            marker.setVisible(true)
          } else {
            marker.setVisible(false)
          }
        }
      })
      infoWindow.close()
      map.fitBounds(bounds)
    })
    // Specify map style options
    const fetchStyles = fetch('static/js/styles.json')
    const styles = await (await fetchStyles).json()
    // Add style-selector control to map
    const styleControl = document.getElementById('style-selector-control')
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl)
    // Set map's style to initial value of selector
    const styleSelector = document.getElementById('style-selector')
    map.setOptions({styles: styles[styleSelector.value]})
    // Apply new style array after user selection
    styleSelector.addEventListener('change', () => map.setOptions({styles: styles[styleSelector.value]}))
    // View Model - Knockout controller ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const toggle = {}
    const viewModel = {
      toggleList: () => {
        let selection = dropdown.value
        let markers = markersArray.filter(marker => marker.city === selection)
        let li = document.querySelectorAll('li')
        if (selection === 'All') {
          li.forEach(li => {
            li.classList.remove('d-none')
          })
        } else {
          li.forEach(li => {
            let markerTitles = markers.map(marker => marker.title)
            let liText = li.textContent
            if (markerTitles.includes(liText)) {
              li.classList.remove('d-none')
            } else {
              li.classList.add('d-none')
            }
          })
        }
      },
      toggleSidenav: () => {
        const sidenav = document.getElementById('sidenav')
        const main = document.getElementById('main')
        if (toggle.toggleSidenav === true) {
          toggle.toggleSidenav = false
          sidenav.style.width = '0px'
          main.style.marginLeft = '0px'
        } else {
          toggle.toggleSidenav = true
          sidenav.style.width = '275px'
          main.style.marginLeft = '275px'
        }
      },
      listName: `${data.response.list.name}`,
      listDescription: `${data.response.list.description}`,
      cities: ko.observableArray(Array.from(new Set(markersArray.map(marker => marker.city)))),
      markersKo: markersArray
    }
    viewModel.cities.unshift('All')
    ko.applyBindings(viewModel)
  } catch (e) {
    throw Error(e)
  }
}
