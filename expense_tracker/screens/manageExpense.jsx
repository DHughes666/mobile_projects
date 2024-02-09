import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native"

import IconButton from "../components/UI/iconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/buttonsComp";

const ManageExpenses = ({route, navigation}) => {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const deleteExpenseHandler = () => {}

    const cancelHandler = () => {}

    const confirmHandler = () => {};

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    return(
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button 
                    style={styles.button} 
                    mode='flat' 
                    pressIt={cancelHandler}
                >
                    Cancel
                </Button>
                <Button style={styles.button} pressIt={confirmHandler}>
                    {isEditing ? 'Update' : 'Add'}
                </Button>
            </View>
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
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