function initMap() {
	var makerParkLatLng = new google.maps.LatLng(40.725139, -73.961377);
	// old
	// var makerParkLatLng = {lat: 40.724675, lng: -73.960315}
	var mapDiv = document.getElementById('map');
	var options = {
		mapTypeControlOptions: {
			mapTypeIds: ['Maker Park']
		},
		center: makerParkLatLng,
		zoom: 15,
		mapTypeId: 'Maker Park',
		scrollwheel: false,
	};
	var styles = [
		{
              featureType: 'poi',
              elementType: 'all',
              stylers: [{color: '#fd007d'}]
        },
		{
			featureType: 'landscape',
			elementType: 'geometry',
			stylers: [
				{color: '#c50165'},
			]
		},
		{
			featureType: 'road',
			elementType: 'all',
			stylers: [
				{ color: '#e90178' },
				{ saturation: 0 }
			]
		},
		{
			featureType: 'road',
			elementType: 'labels',
			stylers: [
				{visibility: 'off'},
				{ color: '#1F005C' },
				{ saturation: 0 }
			]
		},
		{
			featureType: 'all',
			elementType: 'labels.text.fill',
			stylers: [
				{ color: '#1F005C' },
			]
		},
		{
			featureType: 'all',
			elementType: 'labels.text.stroke',
			stylers: [
				{ color: '#e90178' },
			]
		},
		{
			featureType: 'transit.line',
			elementType: 'geometry',
			stylers: [
				{ color: '#e90178' },
			]
		},
		{
			featureType: 'transit.station',
			elementType: 'labels.icon',
			stylers: [
				{ hue: '#c50165' },
			]
		},
		{
			featureType: 'poi.business',
			elementType: 'labels',
			stylers: [
				{ visibility: 'off' }
			]
		},
		{
			featureType: 'water',
			elementType: 'geometry.fill',
			stylers: [
				{ color: '#fd005f'},
				{ saturation: 0 },
			]
		}
	];
	var map = new google.maps.Map(mapDiv, options);
	var styledMapType = new google.maps.StyledMapType(styles, { name: 'Maker Park' });
	map.mapTypes.set('Maker Park', styledMapType);
	var icon = {
		url: "images/mp-logo.png",
		scaledSize: new google.maps.Size(57, 49),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(0, 0)
	};
	var marker = new google.maps.Marker({
		position: makerParkLatLng,
		map:map,
		icon: icon,
		title: 'Maker Park',
	});
	// TODO - Do we want this?
	marker.addListener('click', toggleBounce);
	function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
	};
};
