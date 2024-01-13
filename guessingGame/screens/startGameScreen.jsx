import {useState} from "react";
import { View, Alert, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/primaryButton";
import Colors from "../constants/color";


const StartGameScreen = ({onConfirmNumber}) => {
    const [enteredNumber, setEnteredNumber] = useState('');

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

    return (
        <View style={styles.inputContainer}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
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