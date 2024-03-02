import axios from 'axios';

const url = 'https://foodie-418d2-default-rtdb.firebaseio.com/'

export const storeExpense = (expenseData) => {
    axios.post(`${url}/expenses.json`, expenseData);
}

export const getExpenses = () => {
    axios.get()
}