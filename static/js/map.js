function EuropeMarkers(lat, lng){
    this.lat = lat;
    this.lng = lng;
}

var berlin = new EuropeMarkers(52.5200, 13.4050);
var prague = new EuropeMarkers(50.0755, 14.4378);
var munich = new EuropeMarkers(48.1351, 11.5820);
var villach = new EuropeMarkers(46.6086, 13.8506);
var venice = new EuropeMarkers(45.4408, 12.3155);
var lake_garda = new EuropeMarkers(45.6049, 10.6351);

var map;
var europe = {lat: 51.1657, lng: 10.4515};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: europe,
        zoom: 5
    });
    var berlin_marker = new google.maps.Marker({
        position: {lat: berlin.lat, lng: berlin.lng},
        map: map
    });

    var prague_marker = new google.maps.Marker({
        position: {lat: prague.lat, lng: prague.lng},
        map: map
    });

    var munich_marker = new google.maps.Marker({
        position: {lat: munich.lat, lng: munich.lng},
        map: map
    });

    var villach_marker = new google.maps.Marker({
        position: {lat: villach.lat, lng: villach.lng},
        map: map
    });

    var venice_marker = new google.maps.Marker({
        position: {lat: venice.lat, lng: venice.lng},
        map: map
    });

    var gardaLake_marker = new google.maps.Marker({
        position: {lat: lake_garda.lat, lng: lake_garda.lng},
        map: map
    });
}