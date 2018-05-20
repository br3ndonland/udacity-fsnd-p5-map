// Model (JSON data input)
const model = {
  toggleSidenav: false,
  map: map,
  markers: [],
  locations: [
    {
      name: 'Back Bay',
      coordinates: {lat: 42.3492897, lng: -71.0905478},
      visible: true
    }
  ]
}

// ViewModel (Knockout controller)
const viewModel = {
  appTitle: "Boston's Best Beans",
  toggleSidenav: function () {
    const sidenav = document.getElementById('sidenav')
    const main = document.getElementById('main')
    if (model.toggleSidenav === true) {
      model.toggleSidenav = false
      sidenav.style.width = '0px'
      main.style.marginLeft = '0px'
    } else {
      model.toggleSidenav = true
      sidenav.style.width = '250px'
      main.style.marginLeft = '250px'
    }
  }
}

ko.applyBindings(viewModel)

// viewModel.init()
