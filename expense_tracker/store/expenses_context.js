import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    setExpenses: (expenses) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {},
});

const expensesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id: id}, ...state]

        case 'SET':
            return action.payload;

        case 'UPDATE':
            const itemToUpdateIndex = state.findIndex(
                (expense) => expense.id === action.payload.id);
                const itemToUpdate = state[itemToUpdateIndex];
                const updatedItem = {...itemToUpdate, ...action.payload.data}
                const updatedExpenses = [...state]
                updatedExpenses[itemToUpdateIndex] = updatedItem
                return updatedExpenses

        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload)
        default:
            return state
    }
}



const ExpensesContextProvider = ({children}) => {
    const [expensesState, dispatch] = useReducer(expensesReducer, [])

    const addExpense = (expenseData) => {
        dispatch({type: 'ADD', payload: expenseData});
    }

    const setExpenses = (expenses) => {
        dispatch({type: 'SET', payload: expenses});
    }

    const deleteExpense = (id) => {
        dispatch({type: 'DELETE', payload: id});
    }

    const updateExpense = (id, expenseData) => {
        dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
    }

    const values = {
        expenses: expensesState,
        setExpenses: setExpenses,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    }

    return (
        <ExpensesContext.Provider value={values}>
            {children}
        </ExpensesContext.Provider>
    )
};

export default ExpensesContextProvider;