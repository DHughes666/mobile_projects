import { View, Text, TextInput, StyleSheet } from "react-native"

import { GlobalStyles } from "../../constants/styles";

const InputComp = ({label, style, invalid, textInputConfig}) => {

    let inputStyles = [styles.input]

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }

    return (
        <View style={[styles.rootContainer, style]}>
            <Text style={[styles.label, invalid && styles.invalidLabel]}>
            {label}
            </Text>
            <TextInput style={[inputStyles, invalid && styles.invalidInput]} {...textInputConfig}/>
        </View>
    )
};

const styles = StyleSheet.create({
    rootContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        color: GlobalStyles.colors.primary700,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
    invalidLabel: {
        color: GlobalStyles.colors.error500
    },
    invalidInput: {
        backgroundColor: GlobalStyles.colors.error50,
    },
});

export default InputComp;