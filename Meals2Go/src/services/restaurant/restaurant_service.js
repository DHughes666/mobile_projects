import { mocks } from "./mock"
import camelize from "camelize";

export const restaurantsRequest = (location="41.878113,-87.629799") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location]
        if(!mock) {
            reject("not found")
        };
        resolve(mock);
    })
};

export const restaurantsTransform = ({results = []}) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = [];
        return {
            ...restaurant,
            isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARY',
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
        }
    })
    return camelize(mappedResults);
}


