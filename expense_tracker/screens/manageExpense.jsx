import { useLayoutEffect, useContext } from "react";
import { View, StyleSheet } from "react-native"

import IconButton from "../components/UI/iconButton";
import { GlobalStyles } from "../constants/styles";
import ExpenseForm from "../components/manageExpense/expenseForm";
import { ExpensesContext } from "../store/expenses_context";
import { storeExpense } from "../util/http";

const ManageExpenses = ({route, navigation}) => {
    const {
        updateExpense, addExpense, deleteExpense, expenses
    } = useContext(ExpensesContext)
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const deleteExpenseHandler = (id) => {
        deleteExpense(editedExpenseId)
        navigation.goBack();
    }

    const confirmHandler = (expenseData) => {
        if (isEditing) {
            updateExpense(editedExpenseId, expenseData);
        } else {
            storeExpense(expenseData);
            addExpense(expenseData)
        }

        navigation.goBack();
    }
 
    const cancelHandler = () => {
        navigation.goBack();
    };

    const selectedExpense = expenses.find(expense => 
        expense.id === editedExpenseId )

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    return(
        <View style={styles.container}>
            <ExpenseForm 
                onSubmit={confirmHandler}
                cancelHandler={cancelHandler}
                isEditing={isEditing}
                defaultValues={selectedExpense}
            />
            
            <View style={styles.deleteContainer}>
                {isEditing && <IconButton 
                    icon='trash'
                    color={GlobalStyles.colors.error500}
                    size={36}
                    pressIt={deleteExpenseHandler}
                />}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary400
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center"
    }
});

export default ManageExpenses;