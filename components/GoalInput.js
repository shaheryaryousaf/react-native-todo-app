import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

const GoalInput = ({ setGoals, closeModal }) => {
  const [goalText, setGoalText] = useState("");

  const onChange = (text) => {
    setGoalText(text);
  };

  const addGoal = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalText, id: Math.random().toString() },
    ]);
    setGoalText("");
    closeModal()
  };
  return (
    <Modal animationType="fade">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={ require('../assets/images/goal.png')} />
        <TextInput
          placeholder="Text"
          style={styles.inputText}
          onChangeText={onChange}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" color="#163725" onPress={addGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="#163725" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  image:{
    width:100,
    height: 100,
    margin: 20
  },
  inputContainer: {
    flex: 1,
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#212730",
  },
  inputText: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#0E1116",
    backgroundColor: "#0E1116",
    color: "white",
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    marginTop: 10,
    width: "40%",
    margin: 5,
  },
});
