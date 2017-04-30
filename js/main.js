function initMap() {        
    $.ajax({
    	url: "https://beebox-apidae.herokuapp.com/listbee", 
        success: function(response){
        	console.log(response);
        	var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 4,
              center: {
                    lat: -23.363,
                    lng: 131.044
                }
            });

        	var markers = [];

        	var icon = {
			    url: "images/marker_bee.png", // url
			    scaledSize: new google.maps.Size(50, 70), // scaled size
			    origin: new google.maps.Point(0,0), // origin
			    anchor: new google.maps.Point(0, 0) // anchor
			};

            

            response.forEach(function(location) {
                var contentString = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">' + location.description + '</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>' + location.description + '</b>' + location.description + '</p>'+
                    '</div>'+
                    '</div>';

                var infowindow = new google.maps.InfoWindow({
                  content: contentString
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

            	var latLng = new google.maps.LatLng(location.coord.lat,
				              location.coord.lng);
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
	                  content: contentString
	                });

	                var icon = {
					    url: "images/marker_home.png", // url
					    scaledSize: new google.maps.Size(50, 55), // scaled size
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