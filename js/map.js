function initMap() {
	var makerParkLatLng = {lat: 40.724829, lng: -73.960555}
	var mapDiv = document.getElementById('map');
	var options = {
		mapTypeControlOptions: {
			mapTypeIds: ['Maker Park']
		},
		center: new google.maps.LatLng(40.724829, -73.960555),
		zoom: 15,
		mapTypeId: 'Maker Park',
		scrollwheel: false,
	};
	var styles = [
		{
			featureType: 'all',
			stylers: [
				// { saturation: -80 }
				{ saturation: 0 }
			]
		},
		// {
        //       featureType: 'poi.park',
        //       elementType: 'geometry',
        //       stylers: [{color: '#00FF92'}]
        // },
		{
			featureType: 'landscape',
			elementType: 'geometry',
			stylers: [
				{color: '#00FF92'},
				// { saturation: 80}
			]
		},{
			featureType: 'road.arterial',
			elementType: 'geometry',
			stylers: [
				{ hue: '#00ffee' },
				{ saturation: 50 }
			]
		},{
			featureType: 'poi.business',
			elementType: 'labels',
			stylers: [
				{ visibility: 'off' }
			]
		},{
			featureType: 'water',
			elementType: 'geometry.fill',
			stylers: [
				{ color: '#4000FF'},
				{ saturation: -80 },
			]
		}
	];
	var map = new google.maps.Map(mapDiv, options);
	var styledMapType = new google.maps.StyledMapType(styles, { name: 'Maker Park' });
	map.mapTypes.set('Maker Park', styledMapType);
	var marker = new google.maps.Marker({
		position: makerParkLatLng,
		map:map,
		title: 'Maker Park'
	});
};
