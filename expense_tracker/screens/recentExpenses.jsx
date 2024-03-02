import { useContext, useState, useEffect } from "react";

import { ExpensesContext } from "../store/expenses_context";
import LoadingOverlay from "../components/UI/loadingOverlay";
import ExpensesOutput from "../components/expensesOutput/expensesOutput";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";

const RecentExpenses = () => {
    const {expenses, setExpenses} = useContext(ExpensesContext)
    const [isFetching, setIsFetching] = useState(true)
    
    useEffect(() => {
        async function fetchExpenses() {
            const expenses = await getExpenses();
            setIsFetching(false);
            setExpenses(expenses);
        }

        fetchExpenses();
    },[])

    if (isFetching) {
        return <LoadingOverlay />
    }

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