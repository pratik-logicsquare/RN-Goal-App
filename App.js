import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  const _handleAddGoal = (enteredGoal) => {
    if (!enteredGoal?.trim()?.length) return;
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: enteredGoal?.trim(), id: Date.now() * Math.random() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={_handleAddGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({ item }) => <GoalItem text={item?.text} />}
          keyExtractor={(item) => item?.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
