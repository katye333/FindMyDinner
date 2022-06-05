const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");

module.exports.geocodeRequest = (request, response, client) => {
    const { city, mock } = url.parse(request.url, true).query;

    if (mock === "true") {
        const locationMock = locationsMock[city.toLowerCase()];
        return response.json(locationMock);
    }
    
    client.geocode({
        params: {
            address: city,
        },
        timeout: 1000,
    }).then( res => {
        return response.json(res.data);
    }).catch(error => {
        response.status(400);
        return response.send(error.response.data.error_message);
    })
};