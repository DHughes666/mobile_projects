import React from "react";
import { StyleSheet, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer-comp";
import { Text } from "../../../components/typography/text-comp";

import { RestaurantCard, RestaurantCardCover, CardInfo, 
    Rating, Section, SectionEnd, Icon, Address } from "./restaurant-infoCard-styles";

import star from "../../../../assets/star";
import open from "../../../../assets/open";


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
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
            <CardInfo>
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map((rate, index) => (
                            <SvgXml key={index} xml={star} width={20} height={20}/>
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && 
                            <Text variant="error">
                                CLOSED TEMPORARILY
                            </Text>
                        }
                        <Spacer position="left" size="large">
                        {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
                        </Spacer>
                        <Spacer position="left" size="large">
                        {/* <Icon source={{uri: icon}} /> */}
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </CardInfo>
        </RestaurantCard>
    )
}

