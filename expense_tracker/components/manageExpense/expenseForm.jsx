import { useState } from "react";
import { View, StyleSheet, Text } from "react-native"

import InputComp from "./input";
import Button from "../UI/buttonsComp";
import { getFormattedDate } from "../../util/date";

const ExpenseForm = ({
    cancelHandler, isEditing, onSubmit, defaultValues
}) => {
    const [inputValues, setinputValues] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? getFormattedDate(defaultValues.date) : '',
        description: defaultValues ? defaultValues.description.toString() : '',
    });

    const inputChangeHandler = (inputIdentifier, enteredValue) => {
        setinputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: enteredValue
            }
        });
    }

    const submitHandler = () => {
        const expenseData = {
            amount: +inputValues.amount, // the plus value converts the data to a number
            date: new Date(inputValues.date),
            description: inputValues.description
        }

        onSubmit(expenseData);
    }

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
                <Button style={styles.button} pressIt={submitHandler}>
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