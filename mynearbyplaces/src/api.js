let apiHost = 'https://jarrettpage-nearbyplaces-api.herokuapp.com'
let getPlaces = () => {
    return fetch(apiHost + '/places')
    .then(response => response.json())
}

let addPlace = (place) => {
    return fetch(apiHost + '/place', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
    });
}

let api = {
    getPlaces: getPlaces,
    addPlace: addPlace
};

export default api;