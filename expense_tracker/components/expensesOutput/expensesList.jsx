import { FlatList } from "react-native";

import ExpenseItem from "./expenseItem";

const ExpensesList = ({expenses}) => {

    const renderExpenseItem = (itemData) => {
        return <ExpenseItem {...itemData.item}/>
    }
    
    return (
        <FlatList 
            data={expenses}
            renderItem={renderExpenseItem}
            keyExtractor={(key) => key.id}
        />
    );
};

export default ExpensesList;