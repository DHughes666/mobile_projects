import { StyleSheet } from "react-native";
import { Text } from "react-native";


const GoalItem = ({texty}) => {
    <Text style={styles.goalItem}>{texty}</Text>
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