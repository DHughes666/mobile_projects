import { View, Text, StyleSheet, Pressable, Image } from "react-native";


const MealItem = ({title, imageUrl}) => {
    return (
        <View>
            <Pressable>
                <View>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    }
});

export default MealItem;