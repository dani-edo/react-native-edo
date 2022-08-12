import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoallItem({ text, id, onDeleteItem }) {
  return (
    <Pressable
      onPress={onDeleteItem.bind(this, id)}
      android_ripple={{ color: "white" }}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 17,
  },
});
