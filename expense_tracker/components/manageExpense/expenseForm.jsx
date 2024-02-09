import { useState } from "react";
import { View, StyleSheet, Text } from "react-native"

import InputComp from "./input";
import Button from "../UI/buttonsComp";

const ExpenseForm = ({confirmHandler, cancelHandler, isEditing}) => {
    const [inputValues, setinputValues] = useState({
        amount: '',
        date: '',
        description: ''
    })

    const inputChangeHandler = (inputIdentifier, enteredValue) => {
        setinputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: enteredValue
            }
        });
    }

    const submitHandler = () => {}

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsDisplay}>
                <InputComp 
                    label="Amount" 
                    style={styles.rowInput}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangeHandler.bind(this, 'amount'),
                        value: inputValues.amount,
                }}/>
                <InputComp 
                    label="Date" 
                    style={styles.rowInput}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangeHandler.bind(this, 'date'),
                        value: inputValues.date,
                }}/>
            </View>
            <InputComp label="Description" textInputConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: inputValues.description
                // autoCorrect: false,
                // autoCapitalize: 'sentences',
            }}/>
            <View style={styles.buttons}>
                <Button 
                    style={styles.button} 
                    mode='flat' 
                    pressIt={cancelHandler}
                >
                    Cancel
                </Button>
                <Button style={styles.button} pressIt={confirmHandler}>
                    {isEditing ? 'Update' : 'Add'}
                </Button>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    form: {
        marginTop: 8,
    },
    inputsDisplay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
});


export default ExpenseForm;