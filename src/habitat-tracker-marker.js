var habitat = {
    tracker: {
        version: "v1.0"
    }
}

habitat.Tracker = function(elementId) {
    this.map = new google.maps.Map(document.getElementById(elementId), {
        zoom: 5,
        center: new google.maps.LatLng(53.467511,-2.2338940),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        keyboardShortcuts: false,
        streetViewControl: false,
        rotateControl: false,
        panControl: false,
        scaleControl: false,
        zoomContro: true,
        scrollwheel: true
    });
}


var mt = new habitat.Tracker('map');

