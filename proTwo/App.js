import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  View, 
  FlatList, 
  Button
 } from 'react-native';
import GoalItem from './components/goalItem_comp';
import GoalInput from './components/goalInput_comp';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()}
    ]);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button 
        title='Add New Goal' 
        color='#5e0acc'
        onPress={startAddGoalHandler}
      />
      {modalIsVisible && <GoalInput addGoal={addGoalHandler}/>}
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} 
          renderItem={itemData => {
            return <GoalItem 
                goal={itemData.item.text}
                deleteGoal={deleteGoalHandler}
                id={itemData.item.id}
              />
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  }, 
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
  goalsContainer: {
    flex: 5
  }, 
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: 'white',
  }
});
