
//HANDLERS OF MARKERS FOR TWEETS
//Use $(document).ready(function(()})) to make the site interact with the elements from the API

$(document).ready(function() {
	$('.marker').on('click', getTweets);
});

//set the google map api custom settings 
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

	//attach the HTML class 'google_map' to the google map api
	var map = new google.maps.Map(document.getElementById('google_map'),
		mapOptions);


	setMarkers(map, wonders);


}

	//list of the markers to show on the map
	var wonders = [
		['Chunnel', 49.589, 1.2304, 1, '#chunnel'],
		['CN Tower', 43.653, -79.3831, 2 , '#CNTower'],
		['Empire State Building', 40.7143, -74.0059, 3, '#empirestatebuilding'],
		['Golden Gate Bridge', 37.819878, -122.478503, 4, '#GGBridge'],
		['Itaipu Dam', -25.408056, -54.588889, 5, '#ItaipuDam'], 
		['The Panama Canal', 9.111086, -79.699319, 6, '#ThePanamaCanal'],
		['Islands of Dubai', 24.998427, 54.992853, 7, "#bluewatersisland"]
	];

//var infowindow = new google.maps.InfoWindow({
//			content: wonders[0]
//		});

//this function sets the location and appearance of the wonders object by using a for loop
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
			zindex: mark[3],
			//CAN I SET THE PROPERTY IN THE HTML??? I DID THIS TO CALL THE EVENT HANDLER
			class: marker,
		});

	}

} //closing for setMarkers function


//event listener for the infowindow (if will use)
google.maps.event.addListener(wonders, 'click', function(){
	infowindow.open(map, marker); //will add the load of tweets here
	//getTweetsForArea();
});

//event listener for the map, which happens when the document is loaded
google.maps.event.addDomListener(window, 'load', initialize)




/////////SETTING UP THE TWITTER API//////////



//call the AJAX GET request for the information to be pulled from the Twitter servers. This will include

var getTweets = function(location){

	var currentTarget = event.target.id;
	var marker = $(this).find(wonders[4]); 

	var request = {
		q: location[4],
		site: 'twitter',
		order: 'desc',
		sort: 'creation'};

	var result = $.ajax({
		url: 'https://api.twitter.com/1.1/search/tweets.json',
		data: request,
		dataType: "json",
		type: "GET",
	})
		//set .done() and .fail() functions for what to do if the sit connects correctly to the Twitter server
	.done(function(result){
		displayData(request.q, result.items.length)
		}

	).fail(
			function(jqXHR, error, errorThrown){
				var errorElem = $('.template .error').clone();
				var errorText = '<p>' + error + '<p>';
				errorElem.append(errorText);
		
	}); //closing of the .done/.fail function

}; // closing of the GETTWEETS function

function displayData(event, response){
	
	//get the marker info and the data from wonders[4]
	var currentClick = event.
	var marker = $(currentClick).find(wonders[4]).val();

	//clear the screen from previous results
	$('.show_tweets').text('');

	//show initial results for title and how many tweets only
	var title = wonders[0];
	$('.name_wonder').text(title); 

	if (currentClick == wonders[0]){

		$.each(wonders[0], function(i, item){
			
		}); // closing of $.each
	}

}


//create variables that correspond to the data that we are picking up from the API

//display data in the .tweet class in the HTML. make sure you .clone the class

