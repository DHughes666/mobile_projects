import { StyleSheet, Text, Pressable } from "react-native";


const GoalItem = ({id, goal, deleteGoal}) => {

    return (
        <Pressable onPress={deleteGoal.bind(this, id)}>
            <Text style={styles.goalItem}>{goal}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalItem: {
      margin: 8,
      padding: 8,
      borderRadius: 6,
      backgroundColor: "#5e0acc",
      color: 'white',
    }
  });

export default GoalItem;