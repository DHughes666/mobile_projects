import { createContext, useReducer } from "react";

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

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {},
});

const expensesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id: id}, ...state]

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

const values = {}

const ExpensesContextProvider = ({children}) => {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES)

    const addExpense = (expenseData) => {
        dispatch({type: 'ADD', payload: expenseData});
    }

    const deleteExpense = (id) => {
        dispatch({type: 'DELETE', payload: id});
    }

    const updateExpense = (id, expenseData) => {
        dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
    }

    return (
        <ExpensesContext.Provider value={values}>
            {children}
        </ExpensesContext.Provider>
    )
};

export default ExpensesContextProvider;