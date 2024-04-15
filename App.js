import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInputModal from "./components/GoalInputModal";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const _toggleModal = (visible = false) => {
    setIsModalVisible(visible);
  };

  const _handleAddGoal = (enteredGoal) => {
    if (!enteredGoal?.trim()?.length) return;
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: enteredGoal?.trim(), id: Date.now() * Math.random() },
    ]);
  };

  const _handleDeleteGoal = (id) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal?.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={() => _toggleModal(true)} />

      <GoalInputModal
        visible={isModalVisible}
        onAddGoal={_handleAddGoal}
        onCancel={() => _toggleModal()}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <GoalItem
              text={item?.text}
              id={item?.id}
              onDeleteGoal={_handleDeleteGoal}
            />
          )}
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
