function EuropeMarkers(lat, lng){
    this.lat = lat;
    this.lng = lng;
}

var berlin = new EuropeMarkers(52.5200, 13.4050);
var prague = new EuropeMarkers(50.0755, 14.4378);
var munich = new EuropeMarkers(48.1351, 11.5820);
var villach = new EuropeMarkers(46.6086, 13.8506);
var venice = new EuropeMarkers(45.4408, 12.3155);
var lakeGarda = new EuropeMarkers(45.6049, 10.6351);

var map;
var europe = {lat: 51.1657, lng: 10.4515};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: europe,
        zoom: 5
    });




    // Start Berlin
    var berlinMarker = new google.maps.Marker({
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

    berlinMarker.addListener('click', function() {
        berlin_infowindow.open(map, berlinMarker);
    });
    // END Berlin





    // Start Prague

    var pragueMarker = new google.maps.Marker({
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

    pragueMarker.addListener('click', function() {
        prague_infowindow.open(map, pragueMarker);
    });
    // END Prague





    // Start Munich
    var munichMarker = new google.maps.Marker({
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

    munichMarker.addListener('click', function() {
        munich_infowindow.open(map, munichMarker);
    });
    // END Munich





    // Start Villach
    var villachMarker = new google.maps.Marker({
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

    villachMarker.addListener('click', function() {
        villach_infowindow.open(map, villachMarker);
    });
    // END Villach





    // Start Venice
    var veniceMarker = new google.maps.Marker({
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

    veniceMarker.addListener('click', function() {
        venice_infowindow.open(map, veniceMarker);
    });
    // END Venice




    // Start Garda Lake
    var gardaLakeMarker = new google.maps.Marker({
        position: {lat: lakeGarda.lat, lng: lakeGarda.lng},
        map: map
    });
    var gardaContent = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Lake Garda</h1>';

    var garda_infowindow = new google.maps.InfoWindow({
        content: gardaContent
    });

    gardaLakeMarker.addListener('click', function() {
        garda_infowindow.open(map, gardaLakeMarker);
    });
    // END Garda Lake
}