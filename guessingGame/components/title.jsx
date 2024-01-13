import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/color";

const Title = ({children}) => {
    return <Text style={styles.title}>{children}</Text>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12
    }
})

export default Title;