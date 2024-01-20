import { View, Text, StyleSheet } from "react-native";


const MealItem = ({title}) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default MealItem;