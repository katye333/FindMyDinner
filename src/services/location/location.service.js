import camelize from "camelize";

export const locationRequest = (searchTerm) => {
    return fetch(`http://5ffb-72-184-186-170.ngrok.io/mealstogo-meow/us-central1/geocode?city=${searchTerm}`)
        .then(res =>  res.json())
        .catch(error => {

        })
};


export const locationTransform = (result) => {
    const formattedResponse = camelize(result);
    const { geometry } = formattedResponse.results[0];
    const { lat, lng } = geometry.location;
    
    return { lat, lng, viewport: geometry.viewport };
};
