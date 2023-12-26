import React from "react";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer-comp";
import { Text } from "../../../components/typography/text-comp";

import { RestaurantCard, RestaurantCardCover, CardInfo, 
    Rating, Section, SectionEnd, Icon, Address } from "./restaurant-infoCard-styles";

import star from "../../../../assets/star";
import open from "../../../../assets/open";


export const RestaurantInfo = ({restaurant}) => {
    const {
        name,
        icon, 
        photos,
        address = restaurant['vicinity'],
        isOpenNow = restaurant['openingHours'],
        rating,
        isClosedTemporarily,
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
                        <Icon source={{uri: icon}} />
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </CardInfo>
        </RestaurantCard>
    )
}

