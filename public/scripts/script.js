window.addEventListener('load', () => {
  console.log('Ironmaker app started successfully!');
}, false);


function initMap() {
  console.log('Google library was loaded');
  const $mapContainer = document.getElementById('map');


  if ($mapContainer) {
    const map = new window.google.maps.Map($mapContainer, {
      center: {
        lat: 38.7,
        lng: -9.1
      },
      zoom: 12,
      //disableDefaultUI: true,
      //mapTypeId: 'satellite',
      mapTypeId: 'roadmap', // -> default
      //mapTypeId: 'terrain',
      //mapTypeId: 'hybrid',
    });

    const betaICoordinates = {
      lat: 38.729,
      lng: -9.144
    };

    const marker = new window.google.maps.Marker({
      position: betaICoordinates,
      map
    });

    map.addListener('click', event => {
      console.log(event);
      const position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      //console.log(position);
      new window.google.maps.Marker({
        position,
        map
      });

    })
  }

};