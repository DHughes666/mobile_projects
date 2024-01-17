import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Title from "../components/ui/title";
import Colors from "../constants/color";


const GameOverScreen = () => {
    return (
        <View style={styles.container}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/images/success.png')}
                    style={styles.image}
                />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>X</Text>{' '} 
                rounds to guess the number{' '}
                <Text style={styles.highlight}>Y</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans'
    },
    highlight: {
        fontFamily: 'open-sans',
        color: Colors.primary500,
    }
})

export default GameOverScreen;