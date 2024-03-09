import { Pressable, Text, StyleSheet } from "react-native"
import {Ionicons} from "@expo/vector-icons"

import { Colors } from "../constants/colors"

const OutlineButton = ({children, pressit, icon}) => {
    return (
        <Pressable 
            onPress={pressit}
            style={({pressed}) => [styles.button, pressed && styles.pressed]}>
            
            <Ionicons 
                style={styles.icon}
                name={icon}
                size={18}
                color={Colors.primary500}
            />
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        margin: 4,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primary100
    },
    pressed: {
        opacity: 0.7
    },
    icon: {
        marginRight: 6
    },
    text: {
        color: Colors.primary500
    },
});

export default OutlineButton;