var map;
var dialog;

$(function() {
 	init_map()
 	display_markers()
});


function init_map(){
	map = L.map('map').setView([-25.431456, -49.258988], 13);
	  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	    {
	      attribution: 'Tiles by <a href="http://openstreetmap.org">openstreetmap</a></a>',
	      maxZoom: 17,
	      minZoom: 2
	    }).addTo(map);
}

function display_markers(){
	var meta1nJson={
	  "type": "FeatureCollection",
	  "features": [
	    {
	      "type": "Feature",
	      "geometry": {
	        "type": "Point",
	        "coordinates": [
	          -38.3613558,
	          -8.8044875
	        ]
	      },
	      "properties": {
	        "Ordem": "193",
	        "Eixo": "Leste",
	        "Meta": "1L",
	        "Municipio": "Petrolândia",
	        "Estado": "PE",
	        "Nome da Comunidade": "Agrovila 4"
	      }
	    },
	    {
	      "type": "Feature",
	      "geometry": {
	        "type": "Point",
	        "coordinates": [
	          -38.3445892,
	          -8.7940031
	        ]
	      },
	      "properties": {
	        "Ordem": "194",
	        "Eixo": "Leste",
	        "Meta": "1L",
	        "Municipio": "Petrolândia / Floresta",
	        "Estado": "PE",
	        "Nome da Comunidade": "Agrovila 5"
	      }
	    },
	    {
	      "type": "Feature",
	      "geometry": {
	        "type": "Point",
	        "coordinates": [
	          -37.8521847,
	          -8.6774657
	        ]
	      },
	      "properties": {
	        "Ordem": "195",
	        "Eixo": "Leste",
	        "Meta": "1L",
	        "Municipio": "InajÃ¡/Ibimirim",
	        "Estado": "PE",
	        "Nome da Comunidade": "Indígena KambiwÃ¡ - Baxa da Alexandra"
	      }
	    },
	      {
	      "type": "Feature",
	      "geometry": {
	        "type": "Point",
	        "coordinates": [
	          -36.8521847,
	          -8.6774657
	        ]
	      },
	      "properties": {
	        "Ordem": "195",
	        "Eixo": "Leste",
	        "Meta": "1L",
	        "Municipio": "InajÃ¡/Ibimirim",
	        "Estado": "PE",
	        "Nome da Comunidade": "Indígena KambiwÃ¡ - Baxa da Alexandra"
	      }
	    },
	    {
	      "type": "Feature",
	      "geometry": {
	        "type": "Point",
	        "coordinates": [
	          -37.9229577,
	          -8.645232
	        ]
	      },
	      "properties": {
	        "Ordem": "196",
	        "Eixo": "Leste",
	        "Meta": "1L",
	        "Municipio": "InajÃ¡",
	        "Estado": "PE",
	        "Nome da Comunidade": "Indígena KambiwÃ¡ -  BarracÃ£o"
	      }
	    }
	  ]
	};


	var markers = L.markerClusterGroup();
	var data = new L.GeoJSON(meta1nJson, {
    	onEachFeature: onEachFeature
	})
	markers.addLayer(data);
	map.addLayer(markers);
}

function destroydialog() {
	dialog.close()
}

function onEachFeature(feature, layer) {
    console.log("abree");
  console.log(e);
  dialog = L.control.dialog()
      .setContent(
	    '<div class="modal-content">'+
	      '<h4>Informações</h4>'+
	      '<p>'+e+'</p>'+
	    '</div>'+
	   ' <div class="modal-footer">'+
	      '<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>'+
	  '</div>')
      .addTo(map);
  if (dialog != 'undefined'){
  	dialog.open();
  }
}
