import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import Title from "../components/ui/title";
import PrimaryButton from "../components/ui/primaryButton";
import Colors from "../constants/color";

const devicewidth = Dimensions.get('window').width;


const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
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
                Your phone needed{' '}
                <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
                rounds to guess the number{' '}
                <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton pressIt={onStartNewGame}>
                Start New Game
            </PrimaryButton>
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
        width: devicewidth < 380 ? 150 : 300,
        height: devicewidth < 380 ? 150 : 300,
        borderRadius: devicewidth < 380 ? 75 : 150,
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
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'open-sans',
        color: Colors.primary500,
    }
})

export default GameOverScreen;