import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/primaryButton";


const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput  
                style={styles.numberInput} 
                maxLength={2}
                keyboardType="number-pad"
                autoCorrect={false} 
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
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
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 4,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
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