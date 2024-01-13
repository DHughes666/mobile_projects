import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";

const Title = ({children}) => {
    return <Text style={styles.title}>{children}</Text>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12
    }
})

export default Title;