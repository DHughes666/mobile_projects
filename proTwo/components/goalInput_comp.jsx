import { useState } from "react";
import { 
    View, 
    StyleSheet, 
    Button, 
    TextInput,
    Modal 
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
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your course goal' 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={closeModal}/>
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
    },
    textInput: {
        borderWidth: 1, 
        borderColor: '#cccccc',
        width: '100%',
        padding: 8
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    }
  });

export default GoalInput;