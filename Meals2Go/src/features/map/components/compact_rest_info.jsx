import styled from "styled-components/native";
import { Text } from "./typography/text_comp";
import { Card } from "react-native-paper";

const CardImage = styled(Card.Cover)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`

const CompactImage = styled.Image`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;

export const CompactRestaurantInfo = ({restaurant}) => {
    return (
        <Item>
            <CardImage source={{uri: restaurant.photos[0]}}/>
            <Text center variant="caption" numberOfLines={3}>
                {restaurant.name}
            </Text>
        </Item>
    )
}