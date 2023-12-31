import { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import Search from "../components/map_search_comp";

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`


export const MapScreen = () => (
    <>
        <Search />
        <Map />
    </>
)