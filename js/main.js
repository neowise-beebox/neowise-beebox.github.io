function initMap() {        
    $.ajax({
    	url: "https://beebox-apidae.herokuapp.com/listbee", 
        success: function(response){
            
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 4,


              // F1C543

              styles: [
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                  featureType: 'administrative.locality',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'geometry',
                  stylers: [{color: '#263c3f'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#6b9a76'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry',
                  stylers: [{color: '#38414e'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#212a37'}]
                },
                {
                  featureType: 'road',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#9ca5b3'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry',
                  stylers: [{color: '#746855'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#1f2835'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#f3d19c'}]
                },
                {
                  featureType: 'transit',
                  elementType: 'geometry',
                  stylers: [{color: '#2f3948'}]
                },
                {
                  featureType: 'transit.station',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [{color: '#17263c'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#515c6d'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.stroke',
                  stylers: [{color: '#17263c'}]
                }
              ]
            });

            navigator.geolocation.getCurrentPosition(function(location) {
                var pos = {
                    lat: location.coords.latitude, 
                    lng: location.coords.longitude
                }
                
                map.panTo(pos)
            });

        	var markers = [];

        	var icon = {
			//url: "images/pin-2.png", // url
			scaledSize: new google.maps.Size(90, 60), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
		    };

            

            response.forEach(function(location) {
                var contentString = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">' + location.description + '</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>Estado: </b> ' + location.state + '</p>'+
                    '<p><b>Espécie: </b> ' + location.species + '</p>'+
                    '</div>'+
                    '</div>';

                var infowindow = new google.maps.InfoWindow({
                  content: contentString,
                  position: location.coord,
                  pixelOffset: new google.maps.Size(0, -40)
                });

                var marker = new google.maps.Marker({
                  position: location.coord,
                  map: map,
                  icon : icon,
                  title: 'Marker'
                });

                marker.addListener('click', function() {
                  infowindow.open(map, marker);
                });

                map.setZoom(15);
            	map.panTo(marker.position);

            	var latLng = new google.maps.LatLng(location.coord.lat,location.coord.lng);
			    var marker = new google.maps.Marker({
			      position: latLng
			    });
			    markers.push(marker);
            });   

            if (navigator.geolocation) {
			    navigator.geolocation.getCurrentPosition(function(position){

			        var lat = position.coords.latitude;
			        var lng = position.coords.longitude;
			         
			    	var contentString = '<div id="content">'+
	                    '<div id="siteNotice">'+
	                    '</div>'+
	                    '<h1 id="firstHeading" class="firstHeading">Beebox</h1>'+
	                    '<div id="bodyContent">'+
	                    '<p><b>Beebox</b>Beebox.</p>'+
	                    '</div>'+
	                    '</div>';

	                var infowindow = new google.maps.InfoWindow({
	                  content: contentString,
                      position: {lat: lat, lng: lng},
                      pixelOffset: new google.maps.Size(35,0)
	                });

	                var icon = {
					    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', // url
					    scaledSize: new google.maps.Size(20, 32), // scaled size
					    origin: new google.maps.Point(0,0), // origin
					    anchor: new google.maps.Point(0, 0) // anchor
					};

	                var marker = new google.maps.Marker({
	                  position: {
	                  	lat,lng
	                  },
	                  map: map,
	                  icon : icon,
	                  title: 'Marker'
	                });
	                
	                marker.addListener('click', function() {
	                  infowindow.open(map, marker);
	                });

	                map.setZoom(15);
	            	map.panTo(marker.position);

	            	var latLng = new google.maps.LatLng(lat,
				              lng);
				    var marker = new google.maps.Marker({
				      position: latLng
				    });

				    markers.push(marker);

			    });
			} 

        }
    });            
}

$(function(){
	$("#filtrar").click(function(){
		alert($("#latitude").val());
		alert($("#longitude").val());
	});
});
