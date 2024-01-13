import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/color";


const PrimaryButton = ({children, pressIt}) => {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                onPress={pressIt} 
                android_ripple={{color: Colors.primary600}}
                style={
                    ({pressed}) => pressed 
                        ? [styles.buttonInnerContainer, styles.pressed] 
                        : styles.buttonInnerContainer
                }
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
})

export default PrimaryButton;