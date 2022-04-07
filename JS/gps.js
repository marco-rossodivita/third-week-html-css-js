function show(posizione) {
    console.log("Latitude: " + posizione.coords.latitude);
    console.log("Longitude: " + posizione.coords.longitude);
    console.log("Speed: " + posizione.coords.speed);

    document.getElementById('alt').innerHTML = 'Latitude ' + posizione.coords.latitude;
    document.getElementById('long').innerHTML = 'Longitude ' + posizione.coords.longitude;
}


if (navigator.geolocation) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            show,
            null, {
                enableHighAccuracy: true,
                maximumAge: 60000,
                timeout: 1000
            });
    }

}