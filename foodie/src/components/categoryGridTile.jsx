import React from "react";
import { View, Text, Pressable, 
    StyleSheet, Platform } from "react-native";

const CategoryGridTile = ({title, color, pressit}) => {
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{color: "#ccc"}}
                style={({pressed}) => [styles.button, 
                    pressed ? styles.buttonPressed : null]}
                onPress={pressit}
            >
                <View style={[styles.innerContainer, {backgroundColor : color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'Visible',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default CategoryGridTile;