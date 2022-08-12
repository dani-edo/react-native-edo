import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

function GoalInput({ addGoal, visible, onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (text) => {
    setEnteredGoalText(text);
  };

  const addGoalHandler = () => {
    addGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <Image
        source={require("../assets/images/goal.png")}
        style={styles.image}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course of goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    margin: 0,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    color: "#5e0acc",
    fontSize: 19,
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    // margin: 20,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
  },
});
