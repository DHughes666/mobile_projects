import { Text, StyleSheet } from "react-native"
import ExpensesOutput from "../components/expensesOutput/expensesOutput";

const AllExpenses = () => {
    return(
        <ExpensesOutput expensesPeriod='Total' />
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default AllExpenses;