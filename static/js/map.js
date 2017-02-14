// TODO finish class (constructor) EuropeMarkers
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

// var berlin = {lat: 52.5200, lng: 13.4050};
// var prague = {lat: 50.0755, lng: 14.4378};
// var munich = {lat: 48.1351, lng: 11.5820};
// var villach = {lat: 46.6086, lng: 13.8506};
// var venice = {lat: 45.4408, lng: 12.3155};
// var lake_garda = {lat: 45.6049, lng: 10.6351};


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