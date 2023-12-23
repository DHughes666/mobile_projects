import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Card} from 'react-native-paper';
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
    background-color: ${({theme}) => theme.colors.bg.primary};
`

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${({theme}) => theme.space[4]};
    background-color: ${({theme}) => theme.colors.bg.secondary};
`
const CardInfo = styled.View`
    padding: ${({theme}) => theme.space[3]};
`
const Rating = styled.View`
    flex-direction: row;
    padding-top: ${({theme}) => theme.space[2]};
    padding-bottom: ${({theme}) => theme.space[2]};
`
const Section = styled.View`
    flex-direction: row;
    align-items: center
`
const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`
const Address = styled.Text`
    font-family: ${({theme}) => theme.fonts.body};
    font-size: ${({theme}) => theme.fontSizes.caption};
    font-weight: ${({theme}) => theme.fontWeights.bold};
`
const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.heading};
    font-size: ${({theme}) => theme.fontSizes.title};
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

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
            <CardInfo>
                <Title>{name}</Title>
                <Section>
                    <Rating>
                        {ratingArray.map((rate, index) => (
                            <SvgXml key={index} xml={star} width={20} height={20}/>
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </CardInfo>
        </RestaurantCard>
    )
}

