import { useContext } from "react";

import { ExpensesContext } from "../store/expenses_context";

import ExpensesOutput from "../components/expensesOutput/expensesOutput";
import { getDateMinusDays, getFormattedDate } from "../util/date";

const RecentExpenses = () => {
    const {expenses} = useContext(ExpensesContext)

    const recentExpenses = expenses.filter((recExp) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7)
        return recExp.date > date7DaysAgo
    })

    return(
        <ExpensesOutput
            expenses={recentExpenses}
            expensesPeriod='Last 7 Days'
        />
    )
};

export default RecentExpenses;