import { View, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import ExpensesSummary from "./expensesSummary";
import ExpensesList from "./expensesList";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A new hard drive',
        amount: 59.99,
        date: new Date('2024-02-08')
    },
    {
        id: 'e2',
        description: 'Chelsea boots',
        amount: 29.99,
        date: new Date('2024-02-10')
    },
    {
        id: 'e3',
        description: 'Cloud storage subscription',
        amount: 309.99,
        date: new Date('2023-01-08')
    },
    {
        id: 'e4',
        description: 'Englightenment Now',
        amount: 25.13,
        date: new Date('2022-10-01')
    },
    {
        id: 'e5',
        description: 'A new hard drive',
        amount: 59.99,
        date: new Date('2024-02-08')
    },
    {
        id: 'e6',
        description: 'Chelsea boots',
        amount: 29.99,
        date: new Date('2024-02-10')
    },
    {
        id: 'e7',
        description: 'Cloud storage subscription',
        amount: 309.99,
        date: new Date('2023-01-08')
    },
    {
        id: 'e8',
        description: 'Englightenment Now',
        amount: 25.13,
        date: new Date('2022-10-01')
    }
]

const ExpensesOutput = ({expenses, expensesPeriod}) => {
    return (
        <View style={styles.container}>
            <ExpensesSummary 
                periodName={expensesPeriod}
                expenses={DUMMY_EXPENSES}
            />
            <ExpensesList expenses={DUMMY_EXPENSES}/>
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