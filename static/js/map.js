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




    // Start Berlin
    var berlin_marker = new google.maps.Marker({
        position: {lat: berlin.lat, lng: berlin.lng},
        map: map
    });

    var berlinContent = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Berlin</h1>';

    var berlin_infowindow = new google.maps.InfoWindow({
        content: berlinContent
    });

    berlin_marker.addListener('click', function() {
        berlin_infowindow.open(map, berlin_marker);
    });
    // END Berlin





    // Start Prague
    var prague_marker = new google.maps.Marker({
        position: {lat: prague.lat, lng: prague.lng},
        map: map
    });

    var pragueContent = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Prague</h1>';

    var prague_infowindow = new google.maps.InfoWindow({
        content: pragueContent
    });

    prague_marker.addListener('click', function() {
        prague_infowindow.open(map, prague_marker);
    });
    // END Prague





    // Start Munich
    var munich_marker = new google.maps.Marker({
        position: {lat: munich.lat, lng: munich.lng},
        map: map
    });

    var munichContent = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Munich</h1>';

    var munich_infowindow = new google.maps.InfoWindow({
        content: munichContent
    });

    munich_marker.addListener('click', function() {
        munich_infowindow.open(map, munich_marker);
    });
    // END Munich





    // Start Villach
    var villach_marker = new google.maps.Marker({
        position: {lat: villach.lat, lng: villach.lng},
        map: map
    });

    var villachContent = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Villach</h1>';

    var villach_infowindow = new google.maps.InfoWindow({
        content: villachContent
    });

    villach_marker.addListener('click', function() {
        villach_infowindow.open(map, villach_marker);
    });
    // END Villach





    // Start Venice
    var venice_marker = new google.maps.Marker({
        position: {lat: venice.lat, lng: venice.lng},
        map: map
    });
    var veniceContent = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Venice</h1>';

    var venice_infowindow = new google.maps.InfoWindow({
        content: veniceContent
    });

    venice_marker.addListener('click', function() {
        venice_infowindow.open(map, venice_marker);
    });
    // END Venice




    // Start Garda Lake
    var gardaLake_marker = new google.maps.Marker({
        position: {lat: lake_garda.lat, lng: lake_garda.lng},
        map: map
    });
    var gardaContent = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Lake Garda</h1>';

    var garda_infowindow = new google.maps.InfoWindow({
        content: gardaContent
    });

    gardaLake_marker.addListener('click', function() {
        garda_infowindow.open(map, gardaLake_marker);
    });
    // END Garda Lake
}