/* mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
 */





    const map = L.map('map').setView([51.505, -0.09], 13);

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	const marker = L.marker([51.5, -0.09]).addTo(map)
		.bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();


	const popup = L.popup()
		.setLatLng([51.513, -0.09])
		.setContent('I am a standalone popup.')
		.openOn(map);

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent(`You clicked the map at ${e.latlng.toString()}`)
			.openOn(map);
	}

	map.on('click', onMapClick);