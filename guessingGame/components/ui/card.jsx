import { View, Text, StyleSheet } from "react-native"
import Colors from "../../constants/color";


const Card = ({children}) => {
    return (
        <View style={styles.card}>{children}</View>
    )
};

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
    },
})

export default Card;