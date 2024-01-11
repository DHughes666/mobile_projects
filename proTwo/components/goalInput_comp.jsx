import { useState } from "react";
import { 
    View, 
    StyleSheet, 
    Button, 
    TextInput,
    Modal, Image, 
} from "react-native";


const GoalInput = ({addGoal, visible, closeModal}) => {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        addGoal(enteredGoalText)
        setEnteredGoalText('');
    };
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image 
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                />
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your course goal' 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title='Add Goal' 
                            onPress={addGoalHandler}
                            color="#530acc"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title='Cancel' 
                            onPress={closeModal}
                            color="#f31282"
                        />
                    </View>
                </View>
            </View>
        </Modal>
        
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1, 
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
  });

export default GoalInput;