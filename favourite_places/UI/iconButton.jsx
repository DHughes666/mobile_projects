import { Pressable, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'

const IconButton = ({icon, size, color, pressit}) => {
    return (
        <Pressable 
            style={
                ({pressed}) => [styles.button, pressed && styles.pressed]
            } 
            onPress={pressit}
            >
            <Ionicons 
                name={icon}
                size={size}
                color={color}
            />
        </Pressable>
    )
};

const styles = StyleSheet.create({
    button: {
        padding: 8,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.7
    }
});

export default IconButton;