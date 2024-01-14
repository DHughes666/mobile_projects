import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";

const InstructionText = ({children}) => {
    return (
        <Text style={styles.instruction}>Enter a Number</Text>
    )
};

const styles = StyleSheet.create({
    instruction: {
        color: Colors.accent500,
        fontSize: 24,
    },
})


export default InstructionText;