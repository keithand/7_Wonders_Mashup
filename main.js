
//set the map 
function initialize () {
	var mapOptions = {
		center: new google.maps.LatLng(50.976286, -38.828125),
		zoom: 2,
		disableDefaultUI: true,
		panControl: true,
		scaleControl: true,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
		},
		streetViewControl: true,
		overviewMapControl: true,
		zoomControl: true, 
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL
			}
		};


	var map = new google.maps.Map(document.getElementById('google_map'),
		mapOptions);

	setMarkers(map, wonders);


}

	var wonders = [
		['Chunnel', 49.589, 1.2304, 1],
		['CN Tower', 43.653, -79.3831, 2],
		['Empire State Building', 40.7143, -74.0059, 3],
		['Golden Gate Bridge', 37.819878, -122.478503, 4],
		['Itaipu Dam', -25.408056, -54.588889, 5], 
		['The Panama Canal', 9.111086, -79.699319, 6],
		['Islands of Dubai', 24.998427, 54.992853, 7]
	];


function setMarkers(map, locations) {
	for (var i = 0; i < locations.length; i++){
		var mark = locations[i];
		var myLatLng = new google.maps.LatLng(mark[1], mark[2]);
		var infowindow = new google.maps.InfoWindow({
			content: mark[0]
		});
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: mark[0],
			zindex: mark[3]
		});

	}

} //closing for setMarkers function

google.maps.event.addListener(wonders, 'click', function(){
	infowindow.open(map, marker);
});

google.maps.event.addDomListener(window, 'load', initialize)















