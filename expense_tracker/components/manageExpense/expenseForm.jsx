import { View } from "react-native"

import InputComp from "./input";

const ExpenseForm = () => {
    return (
        <View>
            <InputComp label="Amount"/>
            <InputComp label="Date"/>
            <InputComp label="Description"/>
        </View>
    )
};

export default ExpenseForm;