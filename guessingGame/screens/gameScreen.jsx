import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/title";
import NumberContainer from "../components/game/numberContainer";
import PrimaryButton from "../components/ui/primaryButton";
import Card from "../components/ui/card";

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameOver}) => {
    const initialGuess = generateRandomBetween(
        1, 100, userNumber);
    const [currentGuess, setCurrentGuess] =  useState(initialGuess)

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    const nextGuessHandler = (direction) => {
        if (
            (direction === 'lower' && currentGuess < userNumber) || 
            (direction === 'higher' && currentGuess > userNumber)
            ) {
                Alert.alert("Don't lie!", 'You know that this is wrong...', [{
                    text: 'Sorry!', style: 'cancel'
                }]);
                return;
            }
        if(direction === 'lower') {
            maxBoundary = currentGuess;
        } else if(direction === 'higher') {
            minBoundary = currentGuess + 1
        }
        const newRndNumber = generateRandomBetween(
            minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton 
                        pressIt={nextGuessHandler.bind(this, 'lower')}
                    >
                        -
                    </PrimaryButton>
                    <PrimaryButton 
                        pressIt={nextGuessHandler.bind(this, 'higher')}
                    >
                        +
                    </PrimaryButton>
                </View>
            </Card>
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