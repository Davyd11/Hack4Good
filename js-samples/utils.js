
export function watchLocation(map, input) {
	map = input
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition, handleError);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const latlng = new google.maps.LatLng(lat, lng);
    const marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: "You are here!",
    });
    map.setCenter(latlng);
  }
  function handleError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.error("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.error("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.error("The request to get user location timed out.");
        break;
      default:
        console.error("An unknown error occurred.");
    }
  }
