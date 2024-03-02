import axios from 'axios';

import { getFormattedDate } from './date';

const url = 'https://foodie-418d2-default-rtdb.firebaseio.com/'

export const storeExpense = (expenseData) => {
    axios.post(`${url}/expenses.json`, expenseData);
}

export const getExpenses = async () => {
    const response = await axios.get(`${url}/expenses.json`)

    const expenses = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        };
        expenses.push(expenseObj);
    }

    return expenses;
}