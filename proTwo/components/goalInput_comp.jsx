import { useState } from "react";
import { 
    View, 
    StyleSheet, 
    Button, 
    TextInput,
    Modal 
} from "react-native";


const GoalInput = ({addGoal}) => {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        addGoal(enteredGoalText)
        setEnteredGoalText('');
    };
    return (
        <Modal>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your course goal' 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <Button title='Add Goal' onPress={addGoalHandler}/>
            </View>
        </Modal>
        
    )
}

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
    },
    textInput: {
      borderWidth: 1, 
      borderColor: '#cccccc',
      width: '70%',
      marginRight: 8,
      padding: 8
    }, 
  });

export default GoalInput;