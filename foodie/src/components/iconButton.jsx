import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"

const IconButton = ({icon, color, pressit}) => {
    return (
        <Pressable 
            onPress={pressit} 
            style={({pressed}) => pressed && styles.pressy}
        >
            <Ionicons name={icon} size={24} color={color}/>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    pressy: {
        opacity: 0.7
    }
})

export default IconButton;