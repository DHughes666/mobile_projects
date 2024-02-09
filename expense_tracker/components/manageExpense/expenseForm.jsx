import { View } from "react-native"

import InputComp from "./input";

const ExpenseForm = () => {

    const amountChangeHandler = () => {}

    return (
        <View>
            <InputComp label="Amount" textInputConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: amountChangeHandler
            }}/>
            <InputComp label="Date" textInputConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                onChangeText: () => {}
            }}/>
            <InputComp label="Description" textInputConfig={{
                multiline: true,
                // autoCorrect: false,
                // autoCapitalize: 'sentences',
            }}/>
        </View>
    )
};


export default ExpenseForm;