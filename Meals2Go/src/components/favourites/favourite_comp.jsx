import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { FavouritesContext } from "../../services/favourites/favourites_context";

const FaveButton = styled(TouchableOpacity)`
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 9;
`;


const Favourite = ({restaurant}) => {
    const {favourites, addFavourites, 
        removeFavourites} = useContext(FavouritesContext);
    const isFavourite = favourites.find(
        (fav) => fav.placeId === restaurant.placeId);
    
    return (
        <FaveButton
            onPress={
                () => !isFavourite ? addFavourites(restaurant) : removeFavourites(restaurant)
            }
        >
            <MaterialCommunityIcons 
                name={
                    isFavourite ? 'cards-heart': 'cards-heart-outline'
                } size={24}
                color={isFavourite ? 'red' : 'white'}
            />
        </FaveButton>
    )
};

export default Favourite;