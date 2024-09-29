// Importing necessary modules and components from React Native and React
import { StyleSheet, View, Text } from "react-native";
import CustomButton from "../components/CustomButton"; // Custom button component
import { useState } from "react"; // Hook to manage state

// Default export of the HomeScreen component
export default function HomeScreen() {
  // Declaring a state variable 'count' initialized to 0, with 'setCount' to update it
  const [count, setCount] = useState(0);

  // Function to increment the count value by 1
  const incrementCount = () => {
    setCount((prev) => prev + 1); // Using the previous state value
  };

  // Function to decrement the count value by 1
  const decrementCount = () => {
    setCount((prev) => prev - 1);
  };

  // Function to reset the count value back to 0
  const resetCount = () => {
    setCount(0);
  };

  // JSX to render the UI components
  return (
    <View style={styles.container}>
      {/* Displaying a title */}
      <Text style={{ fontSize: 30, marginBottom: 30 }}>Counter App</Text>

      {/* Displaying the current value of count */}
      <Text style={{ fontSize: 60 }}>{count}</Text>

      {/* Button to increment the count */}
      <CustomButton
        title="Increment +" // Label for the button
        handlePress={incrementCount} // Function to handle button press
        containStyles={{
          marginTop: 28,
          width: "80%",
          backgroundColor: "green", // Styling the button
        }}
      />

      {/* Button to decrement the count */}
      <CustomButton
        title="Decrement -" // Label for the button
        handlePress={decrementCount} // Function to handle button press
        containStyles={{
          marginTop: 28,
          width: "80%",
          backgroundColor: "blue", // Styling the button
        }}
      />

      {/* Button to reset the count */}
      <CustomButton
        title="Reset" // Label for the button
        handlePress={resetCount} // Function to handle button press
        containStyles={{
          marginTop: 28,
          width: "80%",
          backgroundColor: "red", // Styling the button
        }}
      />
    </View>
  );
}

// Stylesheet for the component
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  spacing: {
    marginTop: 28,
    width: "80%",
  },
});
