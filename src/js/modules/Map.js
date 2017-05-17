const initMap = (container) => {

	const coordinates = new google.maps.LatLng(40.725139, -73.961377)

	const options = {
		mapTypeControlOptions: {
			mapTypeIds: ['Maker Park']
		},
		center: coordinates,
		zoom: 15,
		mapTypeId: 'Maker Park',
		scrollwheel: false,
	}

	const styles = [
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
	]

	let map = new google.maps.Map(container, options)

	let styledMapType = new google.maps.StyledMapType(styles, { name: 'Maker Park' })

	map.mapTypes.set('Maker Park', styledMapType)

	const icon = {
		url: "images/mp-logo.png",
		scaledSize: new google.maps.Size(57, 49),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(0, 0)
	}

	const marker = new google.maps.Marker({
		position: coordinates,
		map,
		icon,
		title: 'Maker Park',
	})

	function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        }
		else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
	};

	// TODO - Do we want this?
	marker.addListener('click', toggleBounce);
}

export default initMap
