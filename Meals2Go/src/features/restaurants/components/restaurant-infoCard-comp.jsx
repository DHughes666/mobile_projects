import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from 'react-native-paper';

const RestaurantCard = styled(Card)`
    background-color: white;
`

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${({theme}) => theme.space[4]};
    background-color: white;
`

const Title = styled.Text`
    padding-top: ${({theme}) => theme.space[3]};
    paddingLeft: ${({theme}) => theme.space[4]};
    font-size: ${({theme}) => theme.fontSizes.h4};
    color: ${({theme}) => theme.colors.ui.primary};
`

export const RestaurantInfo = ({restaurant={}}) => {
    const {
        name = "Some Restaurant", 
        icon, 
        photos = [
            "https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg?size=626&ext=jpg&ga=GA1.1.1788614524.1703116800&semt=ais"
        ], 
        address = "200 randy area", 
        isOpenNow = true,
        rating = 4, 
        isClosedTemporarily
    } = restaurant;
    return (
        <RestaurantCard elevation={5}>
            <Title>{name}</Title>
            <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
            <Card.Content>
                <Text variant="titleLarge">{address}</Text>
            </Card.Content>
        </RestaurantCard>
    )
}

