import {useState} from "react";
import { View, Alert, TextInput, 
    StyleSheet, useWindowDimensions } from "react-native";
import PrimaryButton from "../components/ui/primaryButton";
import Colors from "../constants/color";
import Title from "../components/ui/title";
import Card from "../components/ui/card";
import InstructionText from "../components/ui/instructionText";


const StartGameScreen = ({onConfirmNumber}) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height } = useWindowDimensions();

    const numberInputHandler = (enteredNum) => {
        setEnteredNumber(enteredNum);
    }

    const resetInputHandler = () => {
        setEnteredNumber('');
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number',
                'Input has to be a number between 1 and 99',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }

        onConfirmNumber(chosenNumber);
    }

    const marginTopSpace = height < 380 ? 30 : 100;

    return (
        <View style={[styles.rootContainer, { marginTop: marginTopSpace}]}>
        <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput  
                    style={styles.numberInput} 
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCorrect={false}
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>
                            Reset
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton pressIt={confirmInputHandler}>
                            Confirm
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold', 
        textAlign: 'center',
    }, 
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
})

export default StartGameScreen;