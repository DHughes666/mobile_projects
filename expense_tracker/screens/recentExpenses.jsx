import { useContext, useState, useEffect } from "react";

import { ExpensesContext } from "../store/expenses_context";

import ExpensesOutput from "../components/expensesOutput/expensesOutput";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";

const RecentExpenses = () => {
    // const {expenses} = useContext(ExpensesContext)
    const [fetchedExpenses, setFetchedExpenses] = useState([]);

    useEffect(() => {
        async function fetchExpenses() {
            const expenses = await getExpenses();
            setFetchedExpenses(expenses);
        }

        fetchExpenses();
    },[])

    const recentExpenses = fetchedExpenses.filter((recExp) => {
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