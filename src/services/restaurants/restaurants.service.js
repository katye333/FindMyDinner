import camelize from "camelize";
import { host, isMock } from "../../utils/env";

export const restaurantRequest = (location) => {
    return fetch(`${host}/placesNearby?location=${location}`)
        .then(res =>  {
            return res.json()
        })
        .catch(error => {
            console.log(error)
        })
};

export const restaurantsTransform = ({results = []}) => {
    const mappedResults = results.map(restaurant => {
        
        return {
            ...restaurant,
            address: restaurant.vicinity,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY", 
        }        
    });
    return camelize(mappedResults);    
}
