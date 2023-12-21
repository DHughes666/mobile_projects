import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from 'react-native-paper';


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
        <Card elevation={5} style={styles.card}>
            <Card.Title style={styles.title} title={name}/>
            <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}}/>
            <Card.Content>
                <Text variant="titleLarge">{address}</Text>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {backgroundColor: 'white'},
    cover: {padding: 20, backgroundColor: 'white'},
    title: {padding: 16},
})