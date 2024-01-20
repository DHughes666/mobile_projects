import { View, Text, StyleSheet } from "react-native";

const List = ({items}) => {
    return items.map((item) =>
        <View key={item} style={styles.listItem}>
            <Text style={styles.itemText}>{item}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginHorizontal: 12,
        marginVertical: 4,
        backgroundColor: '#a05b5b',
    },
    itemText: {
        color: 'white',
        textAlign: 'center',
    }
});

export default List;