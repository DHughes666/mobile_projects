import styled from "styled-components/native"
import { ScrollView, TouchableOpacity } from "react-native"
import {CompactRestaurantInfo} from "./compact_rest_info_comp"
import { Spacer } from "../spacer/spacer-comp"



const FaveView = styled.View`
    padding: 10px;
`

const FavouritesBar = ({favourites, onNavigate}) => {
    
    return (
        <FaveView>
            <ScrollView
                horizontal showsHorizontalScrollIndicator={false}
            >
                {
                    favourites.map((restaurant) => {
                        const key = restaurant.name;
                        return(
                            <Spacer key={key} position='left' size='medium'>
                                <TouchableOpacity onPress={() => 
                                    onNavigate("RestaurantDetail", {restaurant})
                                }>
                                    <CompactRestaurantInfo restaurant={restaurant} />
                                </TouchableOpacity>
                            </Spacer>
                        )
                    })
                }
            </ScrollView>
        </FaveView>
    )
}

export default FavouritesBar;