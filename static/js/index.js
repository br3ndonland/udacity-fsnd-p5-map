// Google maps JavaScript
// Initialize the map
var map
// Create a new blank array for all the listing markers.
var markers = []
function initMap () {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.3492897, lng: -71.0905478},
    zoom: 13
  })
  var backBay = {lat: 42.3492897, lng: -71.0905478}
  var marker = new google.maps.Marker({
    position: backBay,
    map: map,
    title: 'Back Bay',
    animation: google.maps.Animation.DROP
  })
}
