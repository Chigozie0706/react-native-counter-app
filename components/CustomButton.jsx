import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

// CustomButton component which renders a button with customizable title and styles
const CustomButton = ({ title, handlePress, containStyles }) => {
  return (
    // TouchableOpacity makes the button clickable and provides feedback on touch (activeOpacity reduces opacity when pressed)
    <TouchableOpacity
      style={[styles.button, containStyles]} // Styles are merged: default button styles and any custom styles passed through containStyles
      onPress={handlePress} // Calls the handlePress function when the button is clicked
      activeOpacity={0.7} // Reduces button opacity when pressed for a feedback effect
    >
      {/* Button text displayed with the passed title prop */}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

// Styles for the button and text
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6C63FF",
    borderRadius: 10,
    minHeight: 62,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});

// Exporting CustomButton to be used in other parts of the app
export default CustomButton;
