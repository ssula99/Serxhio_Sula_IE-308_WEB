google.maps.event.addDomListener(window, 'load', init);

function init() {
    var mapOptions = {
       
        zoom: 12,
	    
        center: new google.maps.LatLng(41.327953, 19.819025), 
        styles: [
            {
                "featureType": "all"
                , "elementType": "geometry.fill"
                , "stylers": [
                    {
                        "visibility": "on"
					}
                    , {
                        "saturation": "11"
					}
				]
			}
            , {
                "featureType": "administrative"
                , "elementType": "labels.text.fill"
                , "stylers": [
                    {
                        "color": "#000000"
					}
				]
			}
            , {
                "featureType": "administrative.country"
                , "elementType": "labels.text.fill"
                , "stylers": [
                    {
                        "lightness": "-30"
					}
				]
			}
            , {
                "featureType": "administrative.neighborhood"
                , "elementType": "geometry"
                , "stylers": [
                    {
                        "saturation": "-43"
					}
                    , {
                        "lightness": "-19"
					}
                    , {
                        "gamma": "1.87"
					}
				]
			}
            , {
                "featureType": "administrative.neighborhood"
                , "elementType": "labels.text"
                , "stylers": [
                    {
                        "weight": "3.96"
					}
                    , {
                        "gamma": "1.88"
					}
                    , {
                        "lightness": "-12"
					}
                    , {
                        "saturation": "-100"
					}
				]
			}
            , {
                "featureType": "landscape"
                , "elementType": "all"
                , "stylers": [
                    {
                        "color": "#f6f6f6"
					}
				]
			}
            , {
                "featureType": "poi"
                , "elementType": "all"
                , "stylers": [
                    {
                        "visibility": "off"
					}
				]
			}
            , {
                "featureType": "road"
                , "elementType": "all"
                , "stylers": [
                    {
                        "saturation": -100
					}
                    , {
                        "lightness": 45
					}
				]
			}
            , {
                "featureType": "road.highway"
                , "elementType": "all"
                , "stylers": [
                    {
                        "visibility": "simplified"
					}
				]
			}
            , {
                "featureType": "road.arterial"
                , "elementType": "labels.icon"
                , "stylers": [
                    {
                        "visibility": "off"
					}
				]
			}
            , {
                "featureType": "transit"
                , "elementType": "all"
                , "stylers": [
                    {
                        "visibility": "off"
					}
				]
			}
            , {
                "featureType": "water"
                , "elementType": "all"
                , "stylers": [
                    {
                        "color": "#000000"
					}
                    , {
                        "visibility": "on"
					}
				]
			}
            , {
                "featureType": "water"
                , "elementType": "geometry"
                , "stylers": [
                    {
                        "saturation": "9"
					}
                    , {
                        "color": "#cccccc"
					}
				]
			}
		]
    };

    var mapElement = document.getElementById('architectique-contactMap');
   
    var map = new google.maps.Map(mapElement, mapOptions);
   
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(41.327953, 19.819025)
        , map: map
        , title: 'Tirana'
    });
}
