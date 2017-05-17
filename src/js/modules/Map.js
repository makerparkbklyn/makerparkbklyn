import GoogleMapsLoader from 'google-maps'

GoogleMapsLoader.KEY = 'AIzaSyCx0KQ47A7OQ_yL31SSo66lC-wRoCpWqGo'

const initMap = (google) => {

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

	const makerpark = { lat: 40.725139, lng: -73.961377 }

	let map = new google.maps.Map(document.getElementById('map'), {
		center: makerpark,
		zoom: 15,
		scrollwheel: false,
		styles
	})

	const marker = new google.maps.Marker({
		position: makerpark,
		map,
		icon: {
			url: "assets/images/mp-logo.png",
			scaledSize: new google.maps.Size(57, 49),
			origin: new google.maps.Point(0,0),
			anchor: new google.maps.Point(0, 0)
		},
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

	marker.addListener('click', toggleBounce);
	marker.setAnimation(google.maps.Animation.BOUNCE)
}

const GoogleMap = () => {
	GoogleMapsLoader.load(initMap)
}

export default GoogleMap
