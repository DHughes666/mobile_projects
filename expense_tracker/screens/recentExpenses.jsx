import { useContext, useState, useEffect } from "react";

import { ExpensesContext } from "../store/expenses_context";

import ExpensesOutput from "../components/expensesOutput/expensesOutput";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";

const RecentExpenses = () => {
    const {expenses, setExpenses} = useContext(ExpensesContext)
    
    useEffect(() => {
        async function fetchExpenses() {
            const expenses = await getExpenses();
            setExpenses(expenses);
        }

        fetchExpenses();
    },[])

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