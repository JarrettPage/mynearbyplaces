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

let searchPlaces = (placeName, location) => {
    let query = '';
    if(placeName.length !== 0) {
        query = query + '?placeName=' + placeName;
    }
    if(location.length !== 0) {
        if(placeName.length !== 0) {
            query = query + '&location=' + location;
        }
        else{
            query = query + '?location=' + location;
        }
    }
    return fetch(apiHost + '/search' + query)
    .then(response => response.json());
}

let addReview = (placeName, comment, rating, customerName) => {
    return fetch(apiHost + '/review/' + placeName, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({comment: comment, rating: rating, customerName: customerName})
    });
}

let api = {
    getPlaces: getPlaces,
    addPlace: addPlace,
    searchPlaces: searchPlaces,
    addReview: addReview
};

export default api;