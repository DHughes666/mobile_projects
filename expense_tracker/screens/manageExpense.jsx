import { useLayoutEffect, useState, useContext } from "react";
import { View, StyleSheet } from "react-native"

import IconButton from "../components/UI/iconButton";
import { GlobalStyles } from "../constants/styles";
import ExpenseForm from "../components/manageExpense/expenseForm";
import { ExpensesContext } from "../store/expenses_context";
import { storeExpense, upExpense, delExpense } from "../util/http";
import LoadingOverlay from "../components/UI/loadingOverlay";
import ErrorOverlay from "../components/UI/errorOverlay";

const ManageExpenses = ({route, navigation}) => {
    const {
        updateExpense, addExpense, deleteExpense, expenses
    } = useContext(ExpensesContext)
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState();

    const deleteExpenseHandler = async () => {
        setIsSubmitting(true);
        try {
            await delExpense(editedExpenseId);
            deleteExpense(editedExpenseId)
            navigation.goBack();
        } catch (error) {
            setError('Could not delete expense - please try again later')
            setIsSubmitting(false);
        }
        
    }

    const confirmHandler = async (expenseData) => {
        setIsSubmitting(true);
        try {
            if (isEditing) {
                updateExpense(editedExpenseId, expenseData);
                await upExpense(editedExpenseId, expenseData)
            } else {
                const id = await storeExpense(expenseData);
                addExpense({...expenseData, id: id})
            }
            navigation.goBack();
        } catch (error) {
            setError('Could not save data - please try again later')
            setIsSubmitting(false);
        }

        
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

    const errorHandler = () => {
        setError(null)
    };

    if (isSubmitting) {
        return <LoadingOverlay />;
    }

    if (error && !isSubmitting) {
        return <ErrorOverlay message={error} onConfirm={errorHandler} />;
    }

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