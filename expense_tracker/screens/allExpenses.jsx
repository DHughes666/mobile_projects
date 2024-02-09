import { useContext } from "react";
import { StyleSheet } from "react-native"

import ExpensesOutput from "../components/expensesOutput/expensesOutput";
import { ExpensesContext } from "../store/expenses_context";

const AllExpenses = () => {
  const {expenses} = useContext(ExpensesContext);

    return(
        <ExpensesOutput 
          expenses={expenses}
          expensesPeriod='Total'
        />
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