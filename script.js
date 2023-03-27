// This is an access token for the Mapbox API
mapboxgl.accessToken =
  "pk.eyJ1IjoidG9iZW5uYS0iLCJhIjoiY2xmcmRneDVzMDdmaTN4a2l6dmN6ZzlwZSJ9.tFFEdQ4oJewgff0qs_f3ig"

// This function gets the user's current location and sets up the map
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

// This function sets up the map with the user's current location
function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

// This function sets up the map with a default location if the user's location cannot be found
function errorLocation() {
  setupMap([-2.24, 53.48])
}

// This function creates the map and adds a navigation control and directions
function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}
