import { useContext, useState, useEffect } from "react";
import MapView,{ Marker } from "react-native-maps";
import styled from "styled-components/native";
import Search from "../components/map_search_comp";
import { LocationContext } from "../../../services/location/location_context";
import { RestaurantContext } from "../../../services/restaurant/restaurant_context";


const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`


export const MapScreen = () => {
    const {location} = useContext(LocationContext);
    const {restaurants = []} = useContext(RestaurantContext);
    const [latDelta, setLatDelta] = useState(0);
    const {lat, lng, viewport} = location;
    console.log(viewport);

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDelta(northeastLat - southwestLat);
    }, [location, viewport])

    return (
        <>
            <Search />
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}
            >
                {restaurants.map((restaurant) => {
                    return <Marker
                        key={restaurant.name}
                        title={restaurant.name}
                        coordinate={{
                            latitude: restaurant.geometry.location.lat,
                            longitude: restaurant.geometry.location.lng
                        }}
                    />;
                })}
            </Map>
        </>
    )
}
