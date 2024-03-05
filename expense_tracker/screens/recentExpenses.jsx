import { useContext, useState, useEffect } from "react";

import { ExpensesContext } from "../store/expenses_context";
import LoadingOverlay from "../components/UI/loadingOverlay";
import ErrorOverlay from "../components/UI/errorOverlay";
import ExpensesOutput from "../components/expensesOutput/expensesOutput";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";

const RecentExpenses = () => {
    const {expenses, setExpenses} = useContext(ExpensesContext)
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState()
    
    useEffect(() => {
        async function fetchExpenses() {
            setIsFetching(true);
            try {
                const expenses = await getExpenses();
                setExpenses(expenses);
            } catch (error) {
                setError('Could not fetch expenses!')
            }
            setIsFetching(false);
        }

        fetchExpenses();
    },[]);

    const errorHandler = () => {
        setError(null);
    }

    const recentExpenses = expenses.filter((recExp) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7)
        return recExp.date > date7DaysAgo
    })

    if (error && !isFetching) {
        return <ErrorOverlay message={error} onConfirm={errorHandler}/>
    }

    if (isFetching) {
        return <LoadingOverlay />
    }

    return(
        <ExpensesOutput
            expenses={recentExpenses}
            expensesPeriod='Last 7 Days'
        />
    )
};

export default RecentExpenses;