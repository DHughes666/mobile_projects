import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/title";


const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <View>
                <Text>Higher or lower?</Text>
                
            </View>
            <View><Text>LOG ROUNDS</Text></View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 24,
    }, 
})

export default GameScreen;