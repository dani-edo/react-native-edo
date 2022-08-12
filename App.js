import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoallItem from "./components/GoallItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => setModalIsVisible(true);

  const endAddGoalHandler = () => setModalIsVisible(false);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((oldCourseGoals) => [
      ...oldCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((old) => old.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar style="inverted" />
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        addGoal={addGoalHandler}
        visible={modalIsVisible}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => (
            <GoallItem
              text={item.text}
              id={item.id}
              onDeleteItem={deleteGoalHandler}
            />
          )}
          keyExtractor={(item) => item.id}
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
    paddingHorizontal: 15,
  },
  goalsContainer: {
    flex: 5,
    marginTop: 15,
  },
});
