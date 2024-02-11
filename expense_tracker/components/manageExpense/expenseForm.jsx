import { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native"

import InputComp from "./input";
import Button from "../UI/buttonsComp";
import { getFormattedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";

const ExpenseForm = ({
    cancelHandler, isEditing, onSubmit, defaultValues
}) => {
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true,
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid: true,
        },
        description: {
            value: defaultValues ? defaultValues.description.toString() : '',
            isValid: true,
        }
    });

    const inputChangeHandler = (inputIdentifier, enteredValue) => {
        setInputs((currentInputs) => {
            return {
                ...currentInputs,
                [inputIdentifier]: {value: enteredValue, isValid: true}
            }
        });
    }

    const submitHandler = () => {
        const expenseData = {
            amount: +inputs.amount.value, // the plus value converts the data to a number
            date: new Date(inputs.date.value),
            description: inputs.description.value
        }

        const amountIsValid = (
            !isNaN(expenseData.amount) && expenseData.amount > 0);
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            // Alert.alert('Invalid input', 'Please check your input values')
            setInputs((currInputs) => {
                return {
                    amount: {
                        value: currInputs.amount.value, isValid: amountIsValid},
                    date: {value: currInputs.date.value, isValid: dateIsValid},
                    description: {
                        value: currInputs.description.value, isValid: descriptionIsValid},
                }
            });
            return;
        }

        onSubmit(expenseData);
    }

    const formIsValid = 
        !inputs.amount.isValid ||
        !inputs.date.isValid ||
        !inputs.description.isValid;

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsDisplay}>
                <InputComp 
                    label="Amount" 
                    style={styles.rowInput}
                    invalid={!inputs.amount.isValid}  
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangeHandler.bind(this, 'amount'),
                        value: inputs.amount.value,
                }}/>
                <InputComp 
                    label="Date" 
                    style={styles.rowInput}
                    invalid={!inputs.date.isValid}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        keyboardType: 'number-pad',
                        maxLength: 10,
                        onChangeText: inputChangeHandler.bind(this, 'date'),
                        value: inputs.date.value,
                }}/>
            </View>
            <InputComp 
                label="Description"
                invalid={!inputs.description.isValid}
                textInputConfig={{
                    multiline: true,
                    onChangeText: inputChangeHandler.bind(this, 'description'),
                    value: inputs.description.value
                    // autoCorrect: false,
                    // autoCapitalize: 'sentences',
            }}/>
            {formIsValid && 
                <Text style={styles.errorText}>
                    Invalid input values - please check your entered data
                </Text>
            }
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
    errorText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: GlobalStyles.colors.error50,
        margin: 8
    },
    
});


export default ExpenseForm;