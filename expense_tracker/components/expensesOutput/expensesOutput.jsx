import { View, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import ExpensesSummary from "./expensesSummary";
import ExpensesList from "./expensesList";

const ExpensesOutput = ({expenses, expensesPeriod}) => {
    return (
        <View style={styles.container}>
            <ExpensesSummary 
                periodName={expensesPeriod}
                expenses={expenses}
            />
            <ExpensesList expenses={expenses}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 0,
        paddingHorizontal: 24,
        paddingTop: 24,
        backgroundColor: GlobalStyles.colors.primary200,
    }
});

export default ExpensesOutput;