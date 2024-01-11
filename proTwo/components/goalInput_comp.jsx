import { View, StyleSheet, Button, TextInput } from "react-native";


const GoalInput = ({inputHandler, addHandler}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput} 
                placeholder='Your course goal' 
                onChangeText={inputHandler}
            />
            <Button title='Add Goal' onPress={addHandler}/>
        </View>
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