import { Platform } from "react-native";
import styled from "styled-components/native";
import { Text } from "./typography/text_comp";
import { Card } from "react-native-paper";
import WebView from "react-native-webview";

const CardImage = styled(Card.Cover)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`

const CompactWebview = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`


const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;

const isAndroid = Platform.OS === 'android';

export const CompactRestaurantInfo = ({restaurant}) => {
    const Image = isAndroid ? CompactWebview : CardImage;
    return (
        <Item>
            <Image source={{uri: restaurant.photos[0]}}/>
            <Text center variant="caption" numberOfLines={3}>
                {restaurant.name}
            </Text>
        </Item>
    )
}