import { useState } from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const onDelete = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.appContainer}>
      <Button onPress={openModal} color="#163725" title="Add Goal" />
      {modalVisible && (
        <GoalInput setGoals={setGoals} closeModal={closeModal} />
      )}

      <Text style={styles.heading}>Goals List</Text>
      <FlatList
        data={goals}
        renderItem={(item) => {
          return <GoalItem item={item} onDelete={onDelete} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 60,
    paddingHorizontal: 40,
    backgroundColor: "#0E1116",
    flex: 1,
  },
  heading: {
    color: "white",
    fontSize: 20,
    marginVertical: 5,
  },
});
