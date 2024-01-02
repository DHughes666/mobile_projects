import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {MaterialCommunityIcons, AntDesign} from "@expo/vector-icons"
import { Icon } from "react-native-paper";
import { FavouritesContext } from "../../services/favourites/favourites_context";

const FaveButton = styled(TouchableOpacity)`
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 9;
`;


const Favourite = () => {
    const {favourites, addFavourites, removeFavourites} = useContext(FavouritesContext);
    return (
        <FaveButton>
            <MaterialCommunityIcons 
                name="cards-heart" size={24}
                color="red"
            />
        </FaveButton>
    )
};

export default Favourite;