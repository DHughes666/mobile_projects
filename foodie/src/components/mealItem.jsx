import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealCommonDetails from "./mealCommonDetails";


const MealItem = ({title, imageUrl, duration, complexity, affordability, id}) => {
    const navi = useNavigation();

    const selectMealItemHandler = () => {
        navi.navigate('Meal Detail', {
            mealId: id
        })
    };

    return (
        <View style={styles.mealItem}>
            <Pressable 
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => (pressed ? styles.buttonPressed : null)}
                onPress={selectMealItemHandler}
            >
                <View>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealCommonDetails 
                    duration={duration}
                    complexity={complexity}
                    affordability={affordability}
                />
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4
    },
    buttonPressed: {
        opacity: 0.5,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
});

export default MealItem;