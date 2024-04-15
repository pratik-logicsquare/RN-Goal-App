import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInputModal = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const _handleGoalChange = (enteredGoal) => {
    setEnteredGoal(enteredGoal);
  };

  const _handleAddGoal = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
    onCancel();
  };

  const _handleCancel = () => {
    onCancel();
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoal}
          onChangeText={_handleGoalChange}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={_handleCancel} color="#f31282" />
          </View>

          <View style={styles.button}>
            <Button title="Add Goal" onPress={_handleAddGoal} color="#a281cd" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInputModal;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 32,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 32,
    flexDirection: "row",
    gap: 16,
  },
  button: {
    width: 120,
  },
});
