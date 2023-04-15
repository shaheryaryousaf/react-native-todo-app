import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ item, onDelete }) => {
  return (
    <View style={styles.goalsContainer}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onDelete.bind(this, item.item.id)}
      >
        <View key={item.item.id} style={styles.goalItem}>
          <Text style={styles.goalItemText}>{item.item.text}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalsContainer: {
    marginTop: 5,
  },
  goalItem: {
    backgroundColor: "dodgerblue",
    padding: 10,
    borderRadius: 3,
    backgroundColor: "#272731",
  },
  goalItemText: {
    color: "white",
  },
});
