var habitat = {
    tracker: {
        version: "v0.1"
    }
}


habitat.Tracker = function(elementId) {
    if(!elementId) return;

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
