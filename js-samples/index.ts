import {watchLocation} from './utils.js'

class Trip {
  constructor(public readonly start: google.maps.LatLng, public readonly end: google.maps.LatLng) {}
}


function initMap() {
  const routes = [
    { start: new google.maps.LatLng(40.425292887624686, -3.688789558920166), end: new google.maps.LatLng(40.424867943894164, -3.689156855568019) },
    { start: new google.maps.LatLng(40.424867943894164, -3.689156855568019), end: new google.maps.LatLng(40.42450954669476, -3.6886718153422646) },
    { start: new google.maps.LatLng(40.42450954669476, -3.6886718153422646), end: new google.maps.LatLng(40.4001794, -3.687444) },

  ]
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 16,
      center: routes[0].start,
      mapTypeId: "terrain",
      disableDefaultUI: true,
      styles: [
        {

          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#523735"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "administrative",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#c9b2a6"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#dcd2be"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ae9e90"
            }
          ]
        },
        {
          "featureType": "administrative.neighborhood",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e1ddad"
            },
            {
              "saturation": -25
            },
            {
              "lightness": 15
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#93817c"
            }
          ]
        },
        {
          "featureType": "poi.attraction",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi.attraction",
          "elementType": "labels.icon",
          "stylers": [
            {
              "saturation": -95
            },
            {
              "lightness": 5
            },
            {
              "visibility": "simplified"
            },
            {
              "weight": 1
            }
          ]
        },
        {
          "featureType": "poi.business",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "saturation": 70
            },
            {
              "lightness": -75
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#85af5a"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#fdfcf8"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f8c967"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#e9bc62"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e98d58"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#db8555"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#806b63"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8f7d77"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#b9d3c2"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#92998d"
            }
          ]
        }
      ]
    }
    );
    
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    let service: google.maps.places.PlacesService;
    service = new google.maps.places.PlacesService(map);
    let infowindow: google.maps.InfoWindow;
  let markers: google.maps.Marker[]= [];
  let ubication: google.maps.Marker;

  map.addListener("click", (e) => {
    deleteMarkers();
    placeMarkerAndPanTo(e.latLng, map);
  });
  

  function addMarker(position: google.maps.LatLng | google.maps.LatLngLiteral) {
    const marker = new google.maps.Marker({
      position,
      map,
    });
    markers.push(marker);
  }

  function setMapOnAll(map: google.maps.Map | null) {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }
  function hideMarkers(): void {
    setMapOnAll(null);
  }
  // Shows any markers currently in the array.
  function showMarkers(): void {
    setMapOnAll(map);
  }
  // Deletes all markers in the array by removing references to them.
  function deleteMarkers(): void {
    hideMarkers();
    markers = [];
  }
  

  map.addListener("click", (e) => {
    placeMarkerAndPanTo(e.latLng, map);
  });

  function placeMarkerAndPanTo(latLng: google.maps.LatLng, map: google.maps.Map) {
    
    addMarker(latLng);
    map.panTo(latLng);
    return marker;
  }

  // const coords = [
  //   { lat: 40.4136, lng: -3.6913 },
  // ];
  // const flightPath = new google.maps.Polyline({
  //   path: coords,
  //   geodesic: true,
  //   strokeColor: "#FF0000",
  //   strokeOpacity: 1.0,
  //   strokeWeight: 2,
  // });

  // flightPath.setMap(map);
  watchLocation();
  // const marker = new google.maps.Marker({
  //   position: { lat:40.4136, lng: -3.6929 },
  //   map: map,
  //   title: "Hello World!",
  // });
  // markers.push(marker);

  function clear_directions(map: google.maps.Map){
    if (directionsDisplay != null) {
      directionsDisplay.setMap(null);
      directionsDisplay = null;
    }
  }

  const startquiz = document.getElementById("start-quiz");
  startquiz?.addEventListener("click", () => {
    let questionpanel = document.getElementById("question-panel");
    questionpanel?.classList.remove("hidden");
    startquiz?.classList.add("hidden");
  });
  const arbutton = document.getElementById("ar-btn");
  const arcontainer = document.getElementById("ar-container");
  const closeArButton = document.getElementById("close-ar-btn");

  const startbutton = document.getElementById("start-btn");

  function newRoute(start: google.maps.LatLng, end: google.maps.LatLng) {
    const request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.WALKING,
    };
    directionsRenderer.setMap(map);
    directionsService.route(request, (result, status) => {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
      }
    });
  }

  startbutton?.addEventListener("click", () => {
    // first clear all directions
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    // unbind the directions from the map
    

    directionsRenderer.setMap(null);
    directionsRenderer.setPanel(null);
    const start = new google.maps.LatLng(40.4136, -3.6913);
    const end = new google.maps.LatLng(40.4136, -3.6929);
    newRoute(start, end);
    startbutton.style.display = 'none';
    arbutton.style.display = 'block';
  });

  arbutton?.addEventListener("click", () => {
    arcontainer.style.display = "block";
  })

  closeArButton?.addEventListener("click", () => {
    arcontainer.style.display = "none";
  })
  return map;
}

declare global {
  interface Window {
    initMap: () => void;
  }
}

window.initMap = initMap;


export {};
