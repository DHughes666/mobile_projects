import { View } from "react-native";

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
    }
]

const ExpensesOutput = ({expenses, expensesPeriod}) => {
    return (
        <View>
            <View>
                <ExpensesSummary 
                    periodName={expensesPeriod}
                    expenses={DUMMY_EXPENSES}
                />
                <ExpensesList expenses={DUMMY_EXPENSES}/>
            </View>
        </View>
    )
};

export default ExpensesOutput;