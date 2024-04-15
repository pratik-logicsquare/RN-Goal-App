import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ text, id, onDeleteGoal }) => {
  const _handleDeleteGoal = () => {
    onDeleteGoal(id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#330075", borderless: true }}
        onPress={_handleDeleteGoal}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "#fff",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
