// Foursquare
const myFoursquareID = `AZWXSLUNF04DEQPMXU33DK4OXWAZW4TTJWZ2QDF0U14JMRSK`;
const clientFoursquareID = `GGR5WKIODKYYH032E2KCYJULJOBPSR0WZ1BNTJISA2A3XEUL`;

fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${myFoursquareID}&client_secret=${clientFoursquareID}&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee`)
    .then(function(response) {
        // Code for handling API response
        const res = response.json();
        const resulte = JSON.parse(res);
        console.log(res.parse);
    })
    .catch(function() {
        // Code for handling errors
        console.log(myJson);
    });


// Google Maps

let map;
function initMap() { 
    // constructor creates a new map = only center and zoom are required
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 33.410434, lng: -117.100127},
        zoom: 5,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
            },
            {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
            },
            {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
            },
            {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#6b9a76'}]
            },
            {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
            },
            {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
            },
            {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9ca5b3'}]
            },
            {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#746855'}]
            },
            {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
            },
            {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f3d19c'}]
            },
            {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
            },
            {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
            },
            {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#17263c'}]
            },
            {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#515c6d'}]
            },
            {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#17263c'}]
            }
        ]
    });
    const infoModal = `
    <h1>BeachCoders</h1>
    <p>This is where you fuck shit up</p>
    `;
    let infowindow = new google.maps.InfoWindow({
        content: infoModal
    })
    const tribeca = {lat: 33.410434, lng: -117.100127}
    const marker = new google.maps.Marker({
        position: tribeca,
        map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        title: 'Mount Olympus'
    });

    function toggleBounce(){
        if(marker.getAnimation() !== null ) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    marker.addListener('click', toggleBounce);

    marker.addListener('click', function(){
        infowindow.open(map, marker);
    })
}