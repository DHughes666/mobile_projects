import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({children}) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    subtitleContainer: {
        borderBottomColor: '#574040',
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4
    },
    subtitle: {
        color: '#240c0c',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Subtitle;