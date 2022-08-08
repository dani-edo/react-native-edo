import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoallItem from "./components/GoallItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((oldCourseGoals) => [
      ...oldCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />
      <GoalInput addGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => <GoallItem text={item.text} />}
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
    backgroundColor: "#ffff",
  },
  goalsContainer: {
    flex: 5,
  },
});
