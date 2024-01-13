import {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/ui/title";
import NumberContainer from "../components/game/numberContainer";
import PrimaryButton from "../components/ui/primaryButton";

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

const GameScreen = ({userNumber}) => {
    const initialGuess = generateRandomBetween(
        minBoundary, maxBoundary, userNumber);
    const [currentGuess, setCurrentGuess] =  useState(initialGuess)

    const nextGuessHandler = (direction) => {
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
            <View>
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